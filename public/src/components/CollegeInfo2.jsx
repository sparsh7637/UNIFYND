import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MetaTags from "./MetaTags"; // Import MetaTags

import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const CollegeInfo2 = () => {
  const { collegeTag } = useParams(); // Get the collegeTag from the URL
  const [collegeData, setCollegeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null); // State to track which course is expanded

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const db = getFirestore();
        const collegeDoc = doc(db, "UK_clg", collegeTag);
        const docSnap = await getDoc(collegeDoc);

        if (docSnap.exists()) {
          setCollegeData(docSnap.data());
        } else {
          setError("No such college!");
        }
      } catch (error) {
        setError("Error fetching college data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [collegeTag]);

  const handleToggleCourse = (courseName) => {
    setExpandedCourse(expandedCourse === courseName ? null : courseName);
  };

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="body2" color="textSecondary">
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

  if (!collegeData) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">No data available.</Typography>
      </Container>
    );
  }

  const { instituteName, accomCostURL, tag, Other_names, title } = collegeData;

  return (
    <>
      <MetaTags
        title="Detailed Information on UK Colleges - UNIFYND"
        description="Discover in-depth information about top UK colleges, including academic programs, campus life, admission requirements, and more with UNIFYND."
        keywords="UK colleges, college information, academic programs, campus life, admission requirements, UK universities"
        url="https://unifynd.in/uk-college-info"
        image="https://unifynd.in/path/to/uk-college-info-image.jpg" // Update with actual image URL
      />
      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            {instituteName}
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, mt: 8 }}>
            Accommodation Info
          </Typography>
          <Typography variant="body1">
            URL:{" "}
            <a href={accomCostURL} target="_blank" rel="noopener noreferrer">
              {accomCostURL}
            </a>
          </Typography>
          <Typography variant="body1">
            Other Names: {Other_names.join(", ")}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Courses
          </Typography>
          {Object.entries(title).map(([courseName, course]) => (
            <Card key={courseName} sx={{ mb: 2 }}>
              <CardContent>
                {/* Clickable course name */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  onClick={() => handleToggleCourse(courseName)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {expandedCourse === courseName ? (
                    <FaChevronUp style={{ marginRight: "20px" }} />
                  ) : (
                    <FaChevronDown style={{ marginRight: "20px" }} />
                  )}
                  {courseName}
                </Typography>
                {/* Conditional dropdown with course details */}
                <motion.div
                  initial={false}
                  animate={expandedCourse === courseName ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                  }}
                  // transition={{ duration: 1 }}
                  style={{ overflow: "hidden" }}
                >
                  <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1" fontWeight="bold">
                              Level
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {course.courseLevel}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1" fontWeight="bold">
                              Employment Percentage
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {course.courseEmployPercentage}%
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1" fontWeight="bold">
                              Median Salary
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {course.medianSalary}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1" fontWeight="bold">
                              Course URL
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              <a
                                href={course.courseURL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {course.courseURL}
                              </a>
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1" fontWeight="bold">
                              Employment URL
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              <a
                                href={course.employURL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {course.employURL}
                              </a>
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default CollegeInfo2;
