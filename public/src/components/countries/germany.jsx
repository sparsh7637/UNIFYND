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

const Germany = () => {
  return (
    <>
      <MetaTags
        title="Why study in Germany - UNIFYND"
        description="Discover general information about top German universities, including academic programs, campus life, admission requirements, and more with UNIFYND."
        keywords="Germany universities, study in Germany, international students, academic programs, campus life, admission requirements, study in Europe"
        url="https://unifynd.in/germany-college-info"
        image="https://unifynd.in/path/to/germany-college-info-image.jpg" // Update with actual image URL
      />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Why Study in Germany?
        </Typography>
        <Typography variant="body1" paragraph>
          Germany has established itself as a top destination for international
          students due to its high-quality education, affordable tuition fees,
          and strong research and innovation. Many universities in Germany are
          ranked among the best globally, with a focus on technology,
          engineering, and applied sciences. Germany also offers a rich cultural
          experience, vibrant cities, and a welcoming environment for students
          from around the world.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Study in Germany: Key Facts & Statistics
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableBody>
              {[
                {
                  label: "Languages spoken",
                  value: "German (primary), English",
                },
                {
                  label: "Top cities to study",
                  value: "Berlin, Munich, Frankfurt, Hamburg, Cologne",
                },
                { label: "Intakes", value: "Winter (October), Summer (April)" },
                {
                  label: "Levels of Degrees",
                  value: "Bachelor's, Master's, PhD",
                },
                {
                  label: "Exams required",
                  value: "TestAS, DSH, IELTS, TOEFL, GRE, GMAT",
                },
                {
                  label: "Visa type",
                  value: "Student Visa (Visum zu Studienzwecken)",
                },
                {
                  label: "Cost of study",
                  value:
                    "Mostly free (for public universities), with administrative fees of €150 - €350 per semester",
                },
                {
                  label: "Cost of living",
                  value: "Approximately €850 - €1,200 per month",
                },
                {
                  label: "Financial aid",
                  value: "DAAD Scholarships, Erasmus+, Deutschlandstipendium",
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
          Top Universities in Germany
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
                  name: "Technical University of Munich (TUM)",
                  highlight:
                    "Known for its engineering, technology, and business programs.",
                  ranking: "#50",
                  location: "Munich, Germany",
                },
                {
                  name: "Ludwig Maximilian University of Munich",
                  highlight:
                    "One of Europe's leading academic and research institutions.",
                  ranking: "#59",
                  location: "Munich, Germany",
                },
                {
                  name: "Heidelberg University",
                  highlight:
                    "Germany's oldest university with a strong focus on research.",
                  ranking: "#65",
                  location: "Heidelberg, Germany",
                },
                {
                  name: "Humboldt University of Berlin",
                  highlight:
                    "Pioneering institution in natural sciences and humanities.",
                  ranking: "#128",
                  location: "Berlin, Germany",
                },
                {
                  name: "University of Freiburg",
                  highlight: "A prominent research university in Germany.",
                  ranking: "#172",
                  location: "Freiburg, Germany",
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
          Top 10 Benefits of Studying in Germany
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            {
              title: "High-Quality Education",
              description:
                "German universities offer world-class education and are highly respected globally.",
            },
            {
              title: "No Tuition Fees",
              description:
                "Public universities in Germany offer free education for both domestic and international students, with only nominal administrative fees.",
            },
            {
              title: "Strong Research Focus",
              description:
                "Germany is a global leader in research, particularly in engineering, technology, and the natural sciences.",
            },
            {
              title: "Cultural Diversity",
              description:
                "With a growing international student population, Germany offers a multicultural environment.",
            },
            {
              title: "Career Opportunities",
              description:
                "Germany’s strong economy offers numerous job prospects for graduates, especially in engineering, IT, and healthcare.",
            },
            {
              title: "Post-Study Work Options",
              description:
                "Germany provides international students with an 18-month post-study work visa to seek employment.",
            },
            {
              title: "Affordable Living Costs",
              description:
                "Compared to other European countries, living expenses in Germany are affordable for students.",
            },
            {
              title: "Central Location in Europe",
              description:
                "Germany's central location makes it easy to travel across Europe during your studies.",
            },
            {
              title: "Excellent Public Transport",
              description:
                "Germany has an efficient and affordable public transportation system.",
            },
            {
              title: "Safety and Stability",
              description:
                "Germany is known for being a safe and politically stable country.",
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
          Popular Courses to Study in Germany
        </Typography>
        <Typography variant="body1" paragraph>
          Germany is renowned for offering high-quality education in various
          fields. Some of the most popular courses include:
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            "Mechanical Engineering",
            "Computer Science",
            "Automotive Engineering",
            "Business and Management",
            "Medicine",
            "Architecture",
            "Data Science",
            "Environmental Engineering",
            "Biotechnology",
            "Physics",
            "Political Science",
            "Psychology",
            "Mathematics",
            "Renewable Energy",
            "Economics",
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
          Admission Requirements to Study in Germany
        </Typography>
        <Typography variant="body1" paragraph>
          To study in Germany, international students must meet the following
          general admission requirements:
        </Typography>
        <List sx={{ mt: 3, display: "block", height: "auto" }}>
          {[
            "Academic Transcripts",
            "Proof of Language Proficiency: German (DSH, TestDaF) or English (IELTS, TOEFL)",
            "Statement of Purpose (SOP)",
            "Letter of Recommendation (LOR)",
            "CV",
            "A copy of your valid Passport",
            "Proof of financial resources",
            "Health Insurance",
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

        <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
          Job Prospects After Studying in Germany
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field of Study</TableCell>
                <TableCell>Average Starting Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { field: "Engineering", salary: "€50,000 - €60,000" },
                { field: "IT & Computer Science", salary: "€45,000 - €55,000" },
                { field: "Business & Management", salary: "€40,000 - €50,000" },
                { field: "Healthcare & Medicine", salary: "€55,000 - €65,000" },
                { field: "Architecture", salary: "€40,000 - €50,000" },
                { field: "Biotechnology", salary: "€45,000 - €55,000" },
              ].map((job, index) => (
                <TableRow key={index}>
                  <TableCell>{job.field}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 5 }} />
      </Container>
    </>
  );
};

export default Germany;
