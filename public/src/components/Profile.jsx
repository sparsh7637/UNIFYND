// Profile.jsx
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import MetaTags from "./MetaTags";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userDoc = doc(db, "users", user.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            setProfile(userSnapshot.data());
          } else {
            console.error("No such document!");
          }
        } else {
          console.error("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User signed out");
      navigate("/"); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <>
      <MetaTags
        title="Your Profile - UNIFYND"
        description="Manage your personal information, preferences, and saved colleges. Customize your study abroad journey with UNIFYND's user-friendly profile settings."
        keywords="user profile, study abroad preferences, saved colleges, personal information, college search, UNIFYND profile"
        url="https://unifynd.in/profile"
        image="https://unifynd.in/path/to/profile-image.jpg" // Update with actual image URL
      />
      <div className="mt-5" style={{ width: "100%"}}>
        <h2>Profile</h2>
        <div className="card-body">
          <h5 className="card-title">{profile.fullName}</h5>
          <p className="card-text">
            <strong>Email:</strong> {profile.email}
          </p>
          <p className="card-text">
            <strong>Degree:</strong> {profile.degree}
          </p>
          <p className="card-text">
            <strong>Education:</strong> {profile.education}
          </p>
          <button className="btn btn-danger mt-3" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
