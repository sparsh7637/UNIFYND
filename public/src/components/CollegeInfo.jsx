import React, { useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Grid,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import PieChart from "./PieChart";
import Map from "./MapComponent";
import { useParams } from "react-router-dom";
import MetaTags from "./MetaTags"; 

const useCollegeInfo = (schoolName) => {
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollegeInfo = async () => {
      try {
        const db = getFirestore();
        const collegeDocRef = doc(db, "usclg", schoolName);
        const docSnap = await getDoc(collegeDocRef);

        if (docSnap.exists()) {
          setCollege(docSnap.data());
        } else {
          setError("College not found.");
        }
      } catch (err) {
        setError("Error fetching college information.");
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeInfo();
  }, [schoolName]);

  return { college, loading, error };
};

const useAddedColleges = () => {
  const [addedColleges, setAddedColleges] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  //

  const handleAdd = async (schoolName, college) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    if (!schoolName || typeof schoolName !== "string") {
      console.error("Invalid school name");
      return;
    }

    // Calculate total cost
    const totalCost = (
      (college?.cost_booksupply || 0) +
      (college?.cost_tuition || 0) +
      (college?.cost_other || 0) +
      Math.max(
        college?.cost_roomboard_oncampus || 0,
        college?.cost_roomboard_offcampus || 0
      )
    ).toFixed(2);

    // Prepare college data
    const collegeData = {
      schoolName: college?.school_name || schoolName,
      totalCost,
      admissionRate: college?.admission_rate || 0,
      schoolState: college?.school_state || "",
      locationLat: college?.locationLat, // Ensure this is defined in your scope
      locationLon: college?.locationLon, // Ensure this is defined in your scope
    };

    try {
      const userId = user.uid;
      const db = getFirestore();

      // Get reference to the user's document
      const userDocRef = doc(db, "users", userId);

      // Update the user's document with the new college data
      await setDoc(
        userDocRef,
        {
          colleges: arrayUnion(collegeData), // Adds the college data to the 'colleges' array
        },
        { merge: true }
      );

      setAddedColleges((prev) => [...prev, schoolName]);

      // User Feedback
      console.log("College added successfully!");
    } catch (error) {
      console.error("Error adding college:", error.message);
    }
  };

  const handleDelete = async (schoolName) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    try {
      const userId = user.uid;
      const db = getFirestore();

      // Get the user's document
      const userDocRef = doc(db, "users", userId);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();

        // Find the exact college object to remove
        const collegeToRemove = userData.colleges.find(
          (college) => college.schoolName === schoolName
        );

        if (collegeToRemove) {
          // Remove the found college object
          await updateDoc(userDocRef, {
            colleges: arrayRemove(collegeToRemove),
          });

          // Update state
          setAddedColleges((prev) =>
            prev.filter((name) => name !== schoolName)
          );

          console.log("College removed successfully!");
        } else {
          console.error("College not found in the user's list.");
        }
      } else {
        console.error("User document does not exist.");
      }
    } catch (error) {
      console.error("Error removing college:", error);
    }
  };

  //

  return { addedColleges, handleAdd, handleDelete };
};

const CollegeInfo = () => {
  const { schoolName } = useParams();
  const { college, loading, error } = useCollegeInfo(schoolName);
  const { addedColleges, handleAdd, handleDelete } = useAddedColleges();

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress />
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!college) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">No data available.</Typography>
      </Container>
    );
  }

  const {
    school_name,
    school_city,
    school_state,
    admission_rate,
    grad_students,
    cost_booksupply,
    cost_tuition,
    cost_other,
    cost_roomboard_oncampus,
    cost_roomboard_offcampus,
    act_75_cumulative,
    act_75_english,
    act_75_math,
    sat_75_critical_reading,
    sat_75_math,
    sat_75_writing,
    subject_agriculture,
    subject_resources,
    subject_architecture,
    subject_communications_technology,
    subject_computer,
    subject_education,
    subject_engineering,
    subject_engineering_technology,
    subject_family_consumer_science,
    subject_english,
    subject_humanities,
    subject_biological,
    subject_mathematics,
    subject_parks_recreation_fitness,
    subject_physical_science,
    subject_psychology,
    subject_security_law_enforcement,
    subject_public_administration_social_service,
    subject_social_science,
    subject_visual_performing,
    subject_business_marketing,
    locationLat,
    locationLon,
  } = college;

  const roomBoard = Math.max(
    cost_roomboard_oncampus || 0,
    cost_roomboard_offcampus || 0
  );

  const subjects = [
    { name: "Agriculture", value: subject_agriculture },
    { name: "Resources", value: subject_resources },
    { name: "Architecture", value: subject_architecture },
    {
      name: "Communications Technology",
      value: subject_communications_technology,
    },
    { name: "Computer", value: subject_computer },
    { name: "Education", value: subject_education },
    { name: "Engineering", value: subject_engineering },
    { name: "Engineering Technology", value: subject_engineering_technology },
    {
      name: "Family & Consumer Science",
      value: subject_family_consumer_science,
    },
    { name: "English", value: subject_english },
    { name: "Humanities", value: subject_humanities },
    { name: "Biological", value: subject_biological },
    { name: "Mathematics", value: subject_mathematics },
    {
      name: "Parks, Recreation & Fitness",
      value: subject_parks_recreation_fitness,
    },
    { name: "Physical Science", value: subject_physical_science },
    { name: "Psychology", value: subject_psychology },
    {
      name: "Security & Law Enforcement",
      value: subject_security_law_enforcement,
    },
    {
      name: "Public Administration & Social Service",
      value: subject_public_administration_social_service,
    },
    { name: "Social Science", value: subject_social_science },
    { name: "Visual & Performing Arts", value: subject_visual_performing },
    { name: "Business & Marketing", value: subject_business_marketing },
  ].filter((subject) => subject.value);

  const hasCostInfo =
    cost_booksupply > 0 ||
    cost_tuition > 0 ||
    cost_other > 0 ||
    cost_roomboard_oncampus > 0 ||
    cost_roomboard_offcampus > 0;
  const hasAdmissionRateInfo = admission_rate > 0;
  const hasGradStudentsInfo = grad_students > 0;
  const hasSATInfo =
    sat_75_critical_reading > 0 || sat_75_math > 0 || sat_75_writing > 0;
  const hasACTInfo =
    act_75_cumulative > 0 || act_75_english > 0 || act_75_math > 0;

  return (
    <>
      <MetaTags
        title="Detailed Information on US Colleges - UNIFYND"
        description="Explore comprehensive information about top U.S. colleges, including academic programs, campus life, admission requirements, and more with UNIFYND."
        keywords="US colleges, college information, academic programs, campus life, admission requirements, US universities"
        url="https://unifynd.in/college-info"
        image="https://unifynd.in/path/to/college-info-image.jpg" // Update with actual image URL
      />
      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            {school_name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {school_city}, {school_state}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          {addedColleges.includes(schoolName) ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(schoolName)}
            >
              Remove from My Colleges
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAdd(schoolName, college)}
            >
              Add to My Colleges
            </Button>
          )}
        </Box>
        <Grid container spacing={4} sx={{ mb: 7, mt: 4 }}>
          {hasAdmissionRateInfo && (
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Admission Rate
                  </Typography>
                  <Typography variant="body1">
                    {(admission_rate * 100).toFixed(2)}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {hasGradStudentsInfo && (
            <Grid item xs={12} sm={6} md={6}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Graduate Students
                  </Typography>
                  <Typography variant="body1">{grad_students}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {hasCostInfo && (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Estimated Costs
                  </Typography>
                  <Typography variant="body1">
                    Tuition: ${cost_tuition.toLocaleString()}
                  </Typography>
                  <Typography variant="body1">
                    Books & Supplies: ${cost_booksupply.toLocaleString()}
                  </Typography>
                  <Typography variant="body1">
                    Other Costs: ${cost_other.toLocaleString()}
                  </Typography>
                  <Typography variant="body1">
                    Room & Board: ${roomBoard.toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {hasSATInfo && (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    SAT Scores (75th Percentile)
                  </Typography>
                  <Typography variant="body1">
                    Critical Reading: {sat_75_critical_reading}
                  </Typography>
                  <Typography variant="body1">Math: {sat_75_math}</Typography>
                  <Typography variant="body1">
                    Writing: {sat_75_writing}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {hasACTInfo && (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    ACT Scores (75th Percentile)
                  </Typography>
                  <Typography variant="body1">
                    Cumulative: {act_75_cumulative}
                  </Typography>
                  <Typography variant="body1">
                    English: {act_75_english}
                  </Typography>
                  <Typography variant="body1">Math: {act_75_math}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
        <Box sx={{ mt: 6, textAlign: "center" }}>
          {" "}
          {/* Center-aligns the text and content */}
          <Typography variant="h5" fontWeight="bold">
            Academic Subjects Offered
          </Typography>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {subjects.map((subject) => (
              <Chip
                key={subject.name}
                label={subject.name}
                color="primary"
                sx={{ mr: 1.5, mb: 2 }}
              />
            ))}
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ mb: 4, mt: 3 }}>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <PieChart college={college} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Map lat={locationLat} lon={locationLon} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CollegeInfo;
