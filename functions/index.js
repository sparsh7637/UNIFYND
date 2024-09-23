const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();
admin.initializeApp();
const db = admin.firestore();
console.log("Firebase initialized!");

// Determine CORS settings based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://unifynd.in"] // Replace with your production URL
    : ["http://127.0.0.1:8081"]; // For development

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../public/dist")));

// Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.error("Error verifying transporter:", error);
//   } else {
//     console.log("Transporter is ready to send emails");
//   }
// });

// Middleware to add request ID to each request
app.use((req, res, next) => {
  req.id = uuidv4();
  next();
});

// API endpoints

// Sign up endpoint
// app.post("/signup", async (req, res) => {
//   const { email, password, fullName, education, degree } = req.body;
//   console.log(`[${req.id}] Received signup request:`, req.body);

//   try {
//     // Check if user already exists
//     try {
//       const userRecord = await admin.auth().getUserByEmail(email);
//       console.log(`[${req.id}] User already exists: ${userRecord.uid}`);
//       return res.status(400).send("This email already exists");
//     } catch (error) {
//       if (error.code !== "auth/user-not-found") {
//         console.error(`[${req.id}] Error checking if user exists:`, error);
//         return res.status(500).send("Internal server error");
//       } else {
//         console.log(
//           `[${req.id}] User not found, proceeding to create new user.`
//         );
//       }
//     }

//     // Create new user
//     const userRecord = await admin.auth().createUser({
//       email,
//       password,
//       displayName: fullName,
//     });
//     console.log(`[${req.id}] User created: ${userRecord.uid}`);

//     // Save user data to Firestore
//     await db.collection("users").doc(userRecord.uid).set({
//       email,
//       fullName,
//       education,
//       degree,
//       isConfirmed: false,
//     });

//     // Generate confirmation code and send email
//     const confirmationCode = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Email Confirmation",
//       text: `Your confirmation code is: ${confirmationCode}`,
//     };

//     await transporter.sendMail(mailOptions);
//     await db
//       .collection("users")
//       .doc(userRecord.uid)
//       .update({ confirmationCode });

//     console.log(`[${req.id}] Confirmation email sent to: ${email}`);
//     res.status(200).send("Confirmation email sent. Please check your inbox.");
//   } catch (error) {
//     console.error(`[${req.id}] Error creating new user:`, error);
//     res.status(500).send("Internal server error");
//   }
// });

// app.post("/confirm", async (req, res) => {
//   const { email, code } = req.body;

//   try {
//     const snapshot = await db
//       .collection("users")
//       .where("email", "==", email)
//       .get();

//     if (snapshot.empty) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     let userFound = false;
//     for (const doc of snapshot.docs) {
//       if (doc.data().confirmationCode === code) {
//         await db
//           .collection("users")
//           .doc(doc.id)
//           .update({ isConfirmed: true, confirmationCode: null });
//         userFound = true;
//         return res
//           .status(200)
//           .json({ message: "Email confirmed successfully" });
//       }
//     }

//     if (!userFound) {
//       return res.status(400).json({ message: "Invalid confirmation code" });
//     }
//   } catch (error) {
//     console.error(`[${req.id}] Error confirming email:`, error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

// Forgot password endpoint
app.post("/forgot_password", async (req, res) => {
  const { email } = req.body;
  console.log(`[${req.id}] Received forgot password request:`, req.body);

  try {
    const link = await admin.auth().generatePasswordResetLink(email);
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset",
      text: `To reset your password, please click the following link: ${link}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[${req.id}] Password reset email sent to: ${email}`);
    res.status(200).send("Password reset email sent");
  } catch (error) {
    console.error(`[${req.id}] Error sending password reset email:`, error);
    res.status(500).send("Internal server error");
  }
});

// Fetch university data endpoint
app.get("/data", async (req, res) => {
  console.log(`[${req.id}] Fetching university data from Firestore`);
  try {
    const uniData = [];
    const snapshot = await db.collection("usa_db").get();

    snapshot.forEach((doc) => {
      uniData.push(doc.data());
    });

    console.log(`[${req.id}] Successfully fetched university data`);
    res.status(200).json(uniData);
  } catch (error) {
    console.error(`[${req.id}] Error fetching university data:`, error);
    res.status(500).send("Internal server error");
  }
});

app.post("/note", async (req, res) => {
  const { note } = req.body;
  const idToken = req.headers.authorization?.split("Bearer ")[1];

  if (!idToken) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  try {
    // Verify the ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const userId = decodedToken.uid;
    const notesRef = db.collection("users").doc(userId).collection("notesdb");

    // Save the note
    await notesRef.add({
      note,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Get the updated count of notes
    const snapshot = await notesRef.get();
    const notesCount = snapshot.size;

    res.status(200).json({ message: "Note saved server", notesCount });
  } catch (error) {
    console.error(`[${req.id}] Error processing request:`, error);
    res.status(500).send("Internal server error");
  }
});

// Catch-all handler to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/dist/index.html"));
});

// Expose Express API as a single Cloud Function
exports.api = functions.https.onRequest(app);
