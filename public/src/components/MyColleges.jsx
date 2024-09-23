import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseConfig"; // Adjust the import based on your firebase config file
import "./MyColleges.css";
import MetaTags from "./MetaTags"; 


const MyColleges = () => {
  const [colleges, setColleges] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  // Sample data for colleges when the user is not logged in
  const sampleColleges = [
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      ranking: 1,
    },
    { name: "Stanford University", location: "Stanford, CA", ranking: 2 },
    { name: "Harvard University", location: "Cambridge, MA", ranking: 3 },
    {
      name: "California Institute of Technology",
      location: "Pasadena, CA",
      ranking: 4,
    },
    { name: "University of Chicago", location: "Chicago, IL", ranking: 5 },
  ];

  useEffect(() => {
    const fetchColleges = async () => {
      if (user) {
        const userId = user.uid;
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const collegesData = userData.colleges || [];

          setColleges(
            collegesData.map((college, index) => ({
              id: index + 1,
              schoolName: college.schoolName || " - ",
              totalCost: college.totalCost || " - ",
              admissionRate: college.admissionRate || " - ",
              schoolState: college.schoolState || " - ",
              locationLat: college.locationLat || " - ",
              locationLon: college.locationLon || " - ",
            }))
          );
        } else {
          console.log("No user document found.");
        }
      } else {
        console.log("User is not logged in.");
      }
    };

    fetchColleges();
  }, [user]);

  return (
    <>
      <MetaTags
        title="My Colleges - UNIFYND"
        description="View and manage the list of colleges you're interested in with UNIFYND. Keep track of your preferred institutions and explore more options tailored to your goals."
        keywords="my colleges, college list, interested colleges, college management, college preferences, study abroad"
        url="https://unifynd.in/my-colleges"
        image="https://unifynd.in/path/to/my-colleges-image.jpg" // Update with actual image URL
      />
      <div>
        {user ? (
          colleges.length > 0 ? (
            <table className="table-gradient">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>School Name</th>
                  <th>Total Cost</th>
                  <th>Admission Rate</th>
                  <th>School State</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((college) => (
                  <tr key={college.id}>
                    <td>{college.id}</td>
                    <td>{college.schoolName}</td>
                    <td>{college.totalCost}</td>
                    <td>{college.admissionRate}</td>
                    <td>{college.schoolState}</td>
                    <td>{college.locationLat}</td>
                    <td>{college.locationLon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No colleges found.</p>
          )
        ) : (
          <table className="table-gradient">
            <thead>
              <tr>
                <th>College Name</th>
                <th>Location</th>
                <th>Ranking</th>
              </tr>
            </thead>
            <tbody>
              {sampleColleges.map((college, index) => (
                <tr key={index}>
                  <td>{college.name}</td>
                  <td>{college.location}</td>
                  <td>{college.ranking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default MyColleges;
