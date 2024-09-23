import MetaTags from "../MetaTags";
import React from "react";
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

const USA = () => {
  return (
    <>
      <MetaTags
        title="Why study in USA - UNIFYND"
        description="Discover general information about top USA colleges, including academic programs, campus life, admission requirements, and more with UNIFYND."
        keywords="USA colleges, college information, academic programs, campus life, admission requirements, UK universities, USA College costs"
        url="https://unifynd.in/uk-college-info"
        image="https://unifynd.in/path/to/uk-college-info-image.jpg" // Update with actual image URL
      />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Why Study in the USA?
        </Typography>
        <Typography variant="body1" paragraph>
          The USA is a leading destination for international students, known for
          its world-class universities and diverse cultural experiences. Home to
          prestigious institutions such as Harvard, MIT, Stanford, and Caltech,
          the USA offers a rich educational environment that fosters innovation
          and personal growth. With vibrant cities like New York, Los Angeles,
          Boston, and San Francisco, students have access to a dynamic lifestyle
          and a myriad of opportunities.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Study in the USA: Key Facts & Statistics
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableBody>
              {[
                {
                  label: "Languages spoken",
                  value: "English (primary), Spanish, Chinese, French, German",
                },
                {
                  label: "Top US cities to study",
                  value:
                    "New York, Los Angeles, Boston, San Francisco, Chicago, Miami, Washington D.C.",
                },
                {
                  label: "Intakes",
                  value: "Fall (August), Spring (January), Summer (May)",
                },
                {
                  label: "Levels of Degrees",
                  value: "Associate, Bachelor's, Master's, Doctorate",
                },
                {
                  label: "Exams required",
                  value: "SAT, ACT, GRE, GMAT, IELTS, TOEFL, PTE, MCAT, LSAT",
                },
                {
                  label: "Minimum scores required",
                  value:
                    "SAT: 1200-1500, GRE: 300-330, GMAT: 600-740, IELTS: 6.5-7.5, TOEFL: 80-110",
                },
                {
                  label: "Visa type",
                  value:
                    "F-1 Student Visa, J-1 Exchange Visa, M-1 Vocational Visa",
                },
                {
                  label: "Study visa costs",
                  value: "$160 (approx. INR 13,000)",
                },
                {
                  label: "Cost of study",
                  value:
                    "Approximately $20,000 - $50,000 (approx. INR 16,00,000 - INR 40,00,000) per year",
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
          Top Universities in the USA
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
                  name: "Massachusetts Institute of Technology (MIT)",
                  highlight:
                    "World-renowned for technology and engineering programs",
                  ranking: "#1",
                  location: "Cambridge, MA, USA",
                },
                {
                  name: "Stanford University",
                  highlight:
                    "Known for innovation, entrepreneurship, and strong academic programs",
                  ranking: "#3",
                  location: "Stanford, CA, USA",
                },
                {
                  name: "Harvard University",
                  highlight:
                    "Prestigious institution with a rich history in research and academics",
                  ranking: "#5",
                  location: "Cambridge, MA, USA",
                },
                {
                  name: "California Institute of Technology (Caltech)",
                  highlight: "Focus on science, engineering, and technology",
                  ranking: "#6",
                  location: "Pasadena, CA, USA",
                },
                {
                  name: "University of Chicago",
                  highlight:
                    "Strong focus on economics, law, and social sciences",
                  ranking: "#10",
                  location: "Chicago, IL, USA",
                },
                {
                  name: "Princeton University",
                  highlight:
                    "Known for its emphasis on undergraduate education",
                  ranking: "#12",
                  location: "Princeton, NJ, USA",
                },
                {
                  name: "University of Pennsylvania",
                  highlight:
                    "Ivy League school with a focus on interdisciplinary studies",
                  ranking: "#14",
                  location: "Philadelphia, PA, USA",
                },
                {
                  name: "Yale University",
                  highlight:
                    "One of the oldest universities with a strong liberal arts curriculum",
                  ranking: "#15",
                  location: "New Haven, CT, USA",
                },
                {
                  name: "Columbia University",
                  highlight:
                    "Ivy League university known for its diverse academic programs",
                  ranking: "#19",
                  location: "New York, NY, USA",
                },
                {
                  name: "University of California, Berkeley (UCB)",
                  highlight:
                    "Renowned for research and strong programs in sciences and engineering",
                  ranking: "#27",
                  location: "Berkeley, CA, USA",
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
          Top 10 Benefits of Studying in the USA
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            {
              title: "World-Class Education",
              description:
                "The USA is home to some of the world's top universities, offering a diverse range of programs.",
            },
            {
              title: "Research and Innovation",
              description:
                "The USA is a leader in research, providing students with opportunities to work on groundbreaking projects.",
            },
            {
              title: "Cultural Diversity",
              description:
                "The USA is a melting pot of cultures, offering a unique and enriching experience for international students.",
            },
            {
              title: "Global Networking",
              description:
                "Studying in the USA provides access to a vast network of professionals and alumni.",
            },
            {
              title: "Scholarships and Financial Aid",
              description:
                "Numerous scholarships and financial aid options are available to support international students.",
            },
            {
              title: "Flexibility in Education",
              description:
                "The USA offers flexible education systems with a wide variety of programs and specializations.",
            },
            {
              title: "Career Opportunities",
              description:
                "The USA has a strong economy and offers numerous job opportunities in various fields.",
            },
            {
              title: "Technological Advancement",
              description:
                "The USA is at the forefront of technological innovation, providing students with access to cutting-edge facilities.",
            },
            {
              title: "Safe and Supportive Environment",
              description:
                "US universities provide a safe and supportive environment with various resources for international students.",
            },
            {
              title: "Post-Study Work Options",
              description:
                "The Optional Practical Training (OPT) program allows students to work in the USA after graduation.",
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
          Popular Courses to Study in the USA
        </Typography>
        <Typography variant="body1" paragraph>
          The USA is known for offering a wide range of programs, catering to
          various fields of interest. Some of the most popular courses include:
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            "Computer Science and IT",
            "Business Administration",
            "Engineering",
            "Medicine and Healthcare",
            "Law",
            "Finance and Accounting",
            "Data Science and Analytics",
            "Artificial Intelligence and Robotics",
            "Environmental Science",
            "Media and Communication",
            "Psychology",
            "Education",
            "Political Science",
            "Architecture",
            "Biotechnology",
            "Mathematics",
            "Graphic Design",
            "Journalism",
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
          Top Universities in the USA
        </Typography>
        <Typography variant="body1" paragraph>
          The USA is home to many prestigious universities that are highly
          ranked globally. Some of the top universities include:
        </Typography>
        <Box>
          <List sx={{ mt: 3, display: "block", height: "auto" }}>
            {[
              "Harvard University",
              "Stanford University",
              "Massachusetts Institute of Technology (MIT)",
              "California Institute of Technology (Caltech)",
              "University of Chicago",
              "Princeton University",
              "Yale University",
              "Columbia University",
              "University of Pennsylvania",
              "University of California, Berkeley (UCB)",
            ].map((university, index) => (
              <ListItem
                key={index}
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "list-item",
                }}
              >
                <ListItemText primary={university} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Admission Requirements to Study in USA Universities
        </Typography>
        <Typography variant="body1" paragraph>
          International students need to meet the following general admission
          requirements to fulfill their dream of studying at USA universities:
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            "Academic Transcripts",
            "Work experience letters (if any)",
            "Standardized test scores: GRE/GMAT, SAT/ACT",
            "English Language test Proficiency Scores: TOEFL, iTEP, IELTS, PTE Academic, Duolingo",
            "Statement of Purpose (SOP)",
            "Letter of Recommendation (LOR)",
            "CV",
            "Essay",
            "A copy of your valid Passport",
            "Proof of finances",
          ].map((requirement, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "list-item",
              }}
            >
              <ListItemText primary={requirement} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" paragraph sx={{ mt: 3 }}>
          The minimum required scores for standardized tests and English
          language proficiency exams depend on the specific university and
          course. To aid in admissions, a student's academic transcripts are
          converted into internationally recognized scores through a credential
          evaluation process conducted by WES (World Education Services).
          Understanding CGPA to GPA conversion is also crucial for students,
          particularly when assessing if they meet the academic standards of the
          American 4-point grading system.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Job Prospects After Studying in the USA
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job Title</TableCell>
                <TableCell>Median Annual Salary (USD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  title: "Software Engineer",
                  salary: "$112,620",
                },
                {
                  title: "Data Scientist",
                  salary: "$112,500",
                },
                {
                  title: "Financial Analyst",
                  salary: "$85,660",
                },
                {
                  title: "Registered Nurse",
                  salary: "$77,600",
                },
                {
                  title: "Marketing Manager",
                  salary: "$149,200",
                },
                {
                  title: "Mechanical Engineer",
                  salary: "$88,430",
                },
                {
                  title: "Civil Engineer",
                  salary: "$85,000",
                },
                {
                  title: "Accountant",
                  salary: "$74,990",
                },
                {
                  title: "Management Consultant",
                  salary: "$94,000",
                },
                {
                  title: "Teacher",
                  salary: "$61,820",
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

export default USA;
