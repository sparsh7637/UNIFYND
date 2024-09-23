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

const UK = () => {
  return (
    <>
      <MetaTags
        title="Why study in the UK - UNIFYND"
        description="Explore top UK universities, admission requirements, academic programs, and more with UNIFYND. Study in the UK and enhance your career prospects globally."
        keywords="UK colleges, college information, academic programs, campus life, admission requirements, UK universities, UK College costs"
        url="https://unifynd.in/uk-college-info"
        image="https://unifynd.in/path/to/uk-college-info-image.jpg" // Update with actual image URL
      />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Why Study in the UK?
        </Typography>
        <Typography variant="body1" paragraph>
          The United Kingdom is home to some of the world’s most prestigious
          universities, known for their rich history, academic excellence, and
          global connections. Top universities such as the University of Oxford,
          the University of Cambridge, and Imperial College London attract
          students from all over the world. Studying in the UK provides students
          with a world-class education, exposure to diverse cultures, and a
          gateway to Europe and beyond.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Study in the UK: Key Facts & Statistics
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableBody>
              {[
                { label: "Languages spoken", value: "English (primary)" },
                {
                  label: "Top UK cities to study",
                  value:
                    "London, Manchester, Edinburgh, Birmingham, Glasgow, Bristol",
                },
                {
                  label: "Intakes",
                  value: "September, January",
                },
                {
                  label: "Levels of Degrees",
                  value: "Bachelor's, Master's, Doctorate",
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
                  value: "Tier 4 (General) Student Visa",
                },
                {
                  label: "Study visa costs",
                  value: "£348 (approx. INR 35,000)",
                },
                {
                  label: "Cost of study",
                  value:
                    "Approximately £10,000 - £38,000 (approx. INR 10,00,000 - INR 38,00,000) per year",
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
          Top Universities in the UK
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
                  name: "University of Oxford",
                  highlight:
                    "World-renowned institution with over 900 years of academic excellence",
                  ranking: "#4",
                  location: "Oxford, England",
                },
                {
                  name: "University of Cambridge",
                  highlight:
                    "Prestigious university with strong research and academic programs",
                  ranking: "#2",
                  location: "Cambridge, England",
                },
                {
                  name: "Imperial College London",
                  highlight:
                    "Known for science, engineering, and business programs",
                  ranking: "#6",
                  location: "London, England",
                },
                {
                  name: "London School of Economics and Political Science (LSE)",
                  highlight:
                    "Specializes in social sciences, economics, and political studies",
                  ranking: "#7",
                  location: "London, England",
                },
                {
                  name: "University College London (UCL)",
                  highlight:
                    "Multidisciplinary university with a global reputation in research",
                  ranking: "#9",
                  location: "London, England",
                },
                {
                  name: "University of Edinburgh",
                  highlight:
                    "A leading university in Scotland with strong research in humanities",
                  ranking: "#22",
                  location: "Edinburgh, Scotland",
                },
                {
                  name: "King's College London",
                  highlight:
                    "Known for health sciences, law, and humanities programs",
                  ranking: "#35",
                  location: "London, England",
                },
                {
                  name: "University of Manchester",
                  highlight:
                    "A top university with strengths in engineering, business, and science",
                  ranking: "#40",
                  location: "Manchester, England",
                },
                {
                  name: "University of Warwick",
                  highlight: "Focuses on business, economics, and mathematics",
                  ranking: "#64",
                  location: "Coventry, England",
                },
                {
                  name: "University of Glasgow",
                  highlight:
                    "One of the oldest universities, known for research in arts and sciences",
                  ranking: "#76",
                  location: "Glasgow, Scotland",
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
          Top 10 Benefits of Studying in the UK
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            {
              title: "World-Class Education",
              description:
                "The UK is home to some of the highest-ranking universities in the world.",
            },
            {
              title: "Shorter Duration of Programs",
              description:
                "Undergraduate degrees take 3 years, and Master’s programs typically last 1 year.",
            },
            {
              title: "Cultural Diversity",
              description:
                "The UK is a melting pot of cultures, providing a global perspective.",
            },
            {
              title: "Post-Study Work Visa",
              description:
                "International students can stay and work in the UK for up to 2 years after graduation.",
            },
            {
              title: "Scholarship Opportunities",
              description:
                "There are a wide variety of scholarships for international students.",
            },
            {
              title: "Global Job Opportunities",
              description:
                "UK degrees are highly regarded by employers worldwide, opening doors to global careers.",
            },
            {
              title: "Innovative Learning",
              description:
                "UK universities promote independent thinking and hands-on learning.",
            },
            {
              title: "Access to Europe",
              description:
                "The UK is a gateway to exploring the rest of Europe, offering endless travel opportunities.",
            },
            {
              title: "Historical Significance",
              description:
                "The UK’s rich history provides students with a unique cultural and academic experience.",
            },
            {
              title: "Student Support Services",
              description:
                "UK universities offer extensive support services for international students.",
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
          Popular Courses to Study in the UK
        </Typography>
        <Typography variant="body1" paragraph>
          The UK is famous for its strong programs in a variety of fields. Some
          popular courses include:
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            "Business and Management",
            "Engineering",
            "Law",
            "Medicine",
            "Social Sciences",
            "Computer Science",
            "Education",
            "Economics",
            "Psychology",
            "Environmental Science",
            "Art and Design",
            "Architecture",
            "Journalism",
            "Accounting",
            "Political Science",
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
                  program: "Business and Management",
                  universities:
                    "London Business School, University of Oxford, University of Cambridge",
                },
                {
                  program: "Engineering",
                  universities:
                    "Imperial College London, University of Cambridge, University College London (UCL)",
                },
                {
                  program: "Law",
                  universities:
                    "University of Oxford, University of Cambridge, London School of Economics and Political Science (LSE)",
                },
                {
                  program: "Medicine",
                  universities:
                    "University of Oxford, University of Cambridge, University College London (UCL)",
                },
                {
                  program: "Computer Science",
                  universities:
                    "University of Oxford, University of Cambridge, Imperial College London",
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
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Job Prospects After Studying in the UK
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job Title</TableCell>
                <TableCell>Median Annual Salary (GBP)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  title: "Software Developer",
                  salary: "£45,000",
                },
                {
                  title: "Financial Analyst",
                  salary: "£35,000",
                },
                {
                  title: "Marketing Manager",
                  salary: "£50,000",
                },
                {
                  title: "Civil Engineer",
                  salary: "£40,000",
                },
                {
                  title: "Registered Nurse",
                  salary: "£32,000",
                },
                {
                  title: "Project Manager",
                  salary: "£55,000",
                },
                {
                  title: "Accountant",
                  salary: "£38,000",
                },
                {
                  title: "Data Scientist",
                  salary: "£50,000",
                },
                {
                  title: "Mechanical Engineer",
                  salary: "£42,000",
                },
                {
                  title: "Teacher",
                  salary: "£28,000",
                },
              ].map((job, index) => (
                <TableRow key={index}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default UK;
