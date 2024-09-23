import React from "react";
import MetaTags from "../MetaTags";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Australia = () => {
  return (
    <>
      <MetaTags
        title="Why study in Australia - UNIFYND"
        description="Discover general information about top Australian colleges, including academic programs, campus life, admission requirements, and more with UNIFYND."
        keywords="Australia colleges, college information, academic programs, campus life, admission requirements, Australia universities, Australian College costs"
        url="https://unifynd.in/australia-college-info"
        image="https://unifynd.in/path/to/australia-college-info-image.jpg" // Update with actual image URL
      />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Why Study in Australia?
        </Typography>
        <Typography variant="body1" paragraph>
          Australia is a popular study destination, known for its excellent
          education system, friendly and diverse culture, and stunning natural
          landscapes. It is home to top universities such as the University of
          Melbourne, Australian National University (ANU), and the University of
          Sydney. With cities like Sydney, Melbourne, and Brisbane offering
          vibrant lifestyles, Australia provides international students with
          great opportunities for both academic and personal growth.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Study in Australia: Key Facts & Statistics
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableBody>
              {[
                { label: "Languages spoken", value: "English (primary)" },
                {
                  label: "Top Australian cities to study",
                  value:
                    "Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra",
                },
                {
                  label: "Intakes",
                  value: "February, July",
                },
                {
                  label: "Levels of Degrees",
                  value: "Diploma, Bachelor's, Master's, Doctorate",
                },
                {
                  label: "Exams required",
                  value: "IELTS, TOEFL, PTE, GMAT, GRE",
                },
                {
                  label: "Minimum scores required",
                  value: "IELTS: 6.0-7.5, TOEFL: 79-100, PTE: 58-65",
                },
                {
                  label: "Visa type",
                  value: "Subclass 500 Student Visa",
                },
                {
                  label: "Study visa costs",
                  value: "$620 (approx. INR 50,000)",
                },
                {
                  label: "Cost of study",
                  value:
                    "Approximately AUD 20,000 - AUD 45,000 (approx. INR 10,00,000 - INR 22,50,000) per year",
                },
                {
                  label: "Financial aid",
                  value:
                    "Scholarships, Grants, Fellowships, Student Loans, Work-Study Programs",
                },
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.label}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Top Universities in Australia
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>University Name</TableCell>
                <TableCell>University Highlights</TableCell>
                <TableCell>QS World University Ranking 2024</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  name: "Australian National University (ANU)",
                  highlight:
                    "Known for its research excellence and strong academic programs",
                  ranking: "#30",
                  location: "Canberra, Australia",
                },
                {
                  name: "University of Melbourne",
                  highlight:
                    "Highly regarded for its diverse academic offerings and global connections",
                  ranking: "#33",
                  location: "Melbourne, Australia",
                },
                {
                  name: "University of Sydney",
                  highlight:
                    "Prestigious institution with a strong reputation in various fields",
                  ranking: "#41",
                  location: "Sydney, Australia",
                },
                {
                  name: "University of New South Wales (UNSW)",
                  highlight:
                    "Strong focus on research and innovation across many disciplines",
                  ranking: "#45",
                  location: "Sydney, Australia",
                },
                {
                  name: "University of Queensland (UQ)",
                  highlight:
                    "Renowned for its programs in science, medicine, and engineering",
                  ranking: "#50",
                  location: "Brisbane, Australia",
                },
                {
                  name: "Monash University",
                  highlight:
                    "One of the largest universities with global impact",
                  ranking: "#57",
                  location: "Melbourne, Australia",
                },
                {
                  name: "University of Western Australia (UWA)",
                  highlight: "Known for strong academic programs and research",
                  ranking: "#90",
                  location: "Perth, Australia",
                },
                {
                  name: "University of Adelaide",
                  highlight: "Focused on high-quality education and research",
                  ranking: "#109",
                  location: "Adelaide, Australia",
                },
                {
                  name: "University of Technology Sydney (UTS)",
                  highlight:
                    "A leader in technology and innovation-focused programs",
                  ranking: "#137",
                  location: "Sydney, Australia",
                },
                {
                  name: "Macquarie University",
                  highlight:
                    "Known for business and management programs, with a global outlook",
                  ranking: "#195",
                  location: "Sydney, Australia",
                },
              ].map((university, index) => (
                <TableRow key={index}>
                  <TableCell>{university.name}</TableCell>
                  <TableCell>{university.highlight}</TableCell>
                  <TableCell>{university.ranking}</TableCell>
                  <TableCell>{university.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Top 10 Benefits of Studying in Australia
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            {
              title: "High-Quality Education",
              description:
                "Australia is home to world-class universities and a strong education system.",
            },
            {
              title: "Research Opportunities",
              description:
                "Australia has excellent research programs and facilities.",
            },
            {
              title: "Cultural Diversity",
              description:
                "Australia is a multicultural nation, making it welcoming for international students.",
            },
            {
              title: "Post-Study Work Opportunities",
              description:
                "Australia offers a range of post-study work visas for graduates.",
            },
            {
              title: "Scholarships",
              description:
                "Many scholarships are available to support international students financially.",
            },
            {
              title: "Safe Environment",
              description:
                "Australia is known for its safe, student-friendly cities and campuses.",
            },
            {
              title: "Beautiful Natural Environment",
              description:
                "Australia offers stunning natural landscapes and outdoor activities.",
            },
            {
              title: "Flexible Education System",
              description:
                "Australian universities offer flexibility in programs and course structure.",
            },
            {
              title: "Strong Economy",
              description:
                "Australia has a growing economy with excellent job prospects for graduates.",
            },
            {
              title: "Innovative Learning",
              description:
                "Australia promotes innovation and critical thinking in education.",
            },
          ].map((benefit, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "list-item",
              }}
            >
              <ListItemText
                primary={benefit.title}
                secondary={benefit.description}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Popular Courses to Study in Australia
        </Typography>
        <Typography variant="body1" paragraph>
          Australia is renowned for offering high-quality programs across
          various fields. Some popular courses include:
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            "Engineering",
            "Information Technology",
            "Business and Management",
            "Health Sciences",
            "Education",
            "Environmental Sciences",
            "Law",
            "Psychology",
            "Nursing",
            "Architecture",
            "Accounting",
            "Marketing",
            "Hospitality Management",
            "Data Science",
            "Artificial Intelligence",
          ].map((course, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "list-item",
              }}
            >
              <ListItemText primary={course} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Top Universities by Program
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Program</TableCell>
                <TableCell>Top Universities</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  program: "Engineering",
                  universities:
                    "Australian National University (ANU), University of Sydney, University of Melbourne",
                },
                {
                  program: "Business and Management",
                  universities:
                    "University of Queensland (UQ), University of New South Wales (UNSW), Monash University",
                },
                {
                  program: "Health Sciences",
                  universities:
                    "University of Melbourne, University of Sydney, University of Queensland (UQ)",
                },
                {
                  program: "Information Technology",
                  universities:
                    "University of New South Wales (UNSW), University of Melbourne, University of Queensland (UQ)",
                },
                {
                  program: "Law",
                  universities:
                    "University of Sydney, University of Melbourne, Australian National University (ANU)",
                },
              ].map((program, index) => (
                <TableRow key={index}>
                  <TableCell>{program.program}</TableCell>
                  <TableCell>{program.universities}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Australia;
