import React from "react";
import "../Explore.css";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Canada = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Why Study in Canada?
      </Typography>
      <Typography variant="body1" paragraph>
        Canada stands out as a prime destination for international students,
        offering a blend of excellent education, affordable tuition, and a high
        quality of life. Known for its welcoming attitude and robust
        opportunities for both work and immigration, Canada attracted 551,405
        international students in 2022, including 226,450 from India. As the
        second-largest country in North America, its vibrant cities like Toronto
        and Vancouver are renowned for their cultural diversity and world-class
        education.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        Study in Canada: Key Facts & Statistics
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableBody>
            {[
              { label: "Languages Spoken", value: "English and French" },
              { label: "Cost of Study", value: "CAD 30,000 - 40,000 per year" },
              {
                label: "Sources of Funding",
                value: "Scholarships, Student Loans, Part-time Jobs",
              },
              {
                label: "Exams Required",
                value: "IELTS, TOEFL, PTE, GRE, GMAT",
              },
              {
                label: "Degrees Offered",
                value: "Diploma, Undergraduate, Postgraduate, Doctorate",
              },
              { label: "Intakes", value: "Fall, Winter, Summer" },
              {
                label: "Visa Types",
                value: "Canada Student Visa - SDS and Non-SDS",
              },
              {
                label: "Top Student Cities",
                value: "Montreal, Toronto, Vancouver, Ottawa, Quebec, Edmonton",
              },
              {
                label: "Top Universities",
                value:
                  "University of Toronto, McGill University, University of British Columbia, University of Montreal, University of Alberta",
              },
              { label: "Cost of Living", value: "CAD 600 - 800 per month" },
            ].map((fact, index) => (
              <TableRow key={index}>
                <TableCell>{fact.label}</TableCell>
                <TableCell>{fact.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Top Universities in Canada
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>University Name</TableCell>
              <TableCell>Known For</TableCell>
              <TableCell>QS World University Ranking 2024</TableCell>
              <TableCell>Tuition Fee per Year (CAD)</TableCell>
              <TableCell>Tuition Fee per Year (INR)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                name: "University of Toronto",
                knownFor: "Top research-intensive, innovation-driven",
                ranking: 21,
                feeCad: 40000,
                feeInr: "24.51 lakhs",
              },
              {
                name: "McGill University",
                knownFor: "Renowned for Engineering courses",
                ranking: 30,
                feeCad: 27000,
                feeInr: "16.54 lakhs",
              },
              {
                name: "University of British Columbia",
                knownFor: "Strong in teaching and research, consistent ranking",
                ranking: 34,
                feeCad: 34000,
                feeInr: "20.83 lakhs",
              },
              {
                name: "University of Montreal",
                knownFor: "Largest university complex, prominent research",
                ranking: 141,
                feeCad: 17000,
                feeInr: "10.41 lakhs",
              },
              {
                name: "University of Alberta",
                knownFor:
                  "Top in Engineering, Humanities, Health Sciences, Business",
                ranking: 111,
                feeCad: 21000,
                feeInr: "12.87 lakhs",
              },
              {
                name: "University of Waterloo",
                knownFor:
                  "Leading in Computer Science, Engineering, Science, Math",
                ranking: 112,
                feeCad: 40000,
                feeInr: "24.51 lakhs",
              },
              {
                name: "Western University",
                knownFor: "Excellence in education, research, healthcare",
                ranking: 114,
                feeCad: 23000,
                feeInr: "14.09 lakhs",
              },
              {
                name: "University of Calgary",
                knownFor: "Strong research, diverse university culture",
                ranking: 182,
                feeCad: 37000,
                feeInr: "22.67 lakhs",
              },
              {
                name: "McMaster University",
                knownFor: "Research-intensive, notable for nuclear reactor",
                ranking: 189,
                feeCad: 45000,
                feeInr: "27.57 lakhs",
              },
              {
                name: "University of Ottawa",
                knownFor: "Focus on excellence, relevance, and impact",
                ranking: 203,
                feeCad: 30000,
                feeInr: "18.38 lakhs",
              },
            ].map((university, index) => (
              <TableRow key={index}>
                <TableCell>{university.name}</TableCell>
                <TableCell>{university.knownFor}</TableCell>
                <TableCell>{university.ranking}</TableCell>
                <TableCell>{university.feeCad}</TableCell>
                <TableCell>{university.feeInr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Top 6 Benefits of Studying in Canada
      </Typography>
      <List sx={{ mt: 3, display: "block", height: "auto" }}>
        {[
          {
            title: "Streamlined Visa Process",
            description:
              "The Student Direct Stream (SDS) offers a quick and efficient visa process, with approvals typically within 20 working days.",
          },
          {
            title: "High-Quality Education",
            description:
              "Canada is home to numerous top-ranked universities, providing excellent education at competitive prices.",
          },
          {
            title: "Strong Job Market",
            description:
              "The Canadian job market is diverse, offering numerous employment opportunities and competitive salaries.",
          },
          {
            title: "Renowned Universities",
            description:
              "Canadian institutions are consistently ranked among the top worldwide, offering outstanding research facilities and career prospects.",
          },
          {
            title: "Cultural Diversity",
            description:
              "With over 250 ethnic origins and 200 languages, Canada's multicultural environment fosters inclusivity and global understanding.",
          },
          {
            title: "Active Campus Life",
            description:
              "Students enjoy a vibrant campus life with a wide range of activities and networking opportunities.",
          },
        ].map((benefit, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <ListItemText
              primary={benefit.title}
              secondary={benefit.description}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Popular Courses to Study in Canada
      </Typography>
      <Typography variant="body1" paragraph>
        Canada's educational system is renowned for its broad array of programs.
        Students can engage in hands-on learning through a variety of
        undergraduate and postgraduate courses. Here are some popular fields of
        study:
      </Typography>
      <List sx={{ mt: 3, display: "block", height: "auto" }}>
        {[
          "Computer Science",
          "Business",
          "Engineering",
          "Health Sciences",
          "Physiotherapy",
          "Information Technology",
          "Animation and Gaming",
          "Hospitality Management",
          "International Business Management",
          "Master of Business Administration",
          "Architecture",
          "Culinary Management",
          "Media & Journalism",
          "Agriculture Science",
        ].map((course, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Canada Student Visa Requirements for International Students
      </Typography>
      <Typography variant="body1" paragraph>
        To study in Canada, international students must obtain a study permit,
        which is essential for studying at Designated Learning Institutions
        (DLIs) and accompanies a visitor visa or Electronic Travel Authorization
        (eTA) for entry. While a study permit itself is not a visa, the student
        visa is granted along with the permit.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Visa Requirements
      </Typography>
      <List sx={{ mt: 3, display: "block", height: "auto" }}>
        {[
          "Completed visa application form",
          "Letter of acceptance from a DLI",
          "Valid passport",
          "Proof of financial support",
          "Letter of intent",
          "Medical examination (if required)",
          "Proof of payment for tuition and accommodation",
          "Photos meeting the visa application specifications",
        ].map((requirement, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <ListItemText primary={requirement} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Canada Student Visa Application Steps
      </Typography>
      <List sx={{ mt: 3, display: "block", height: "auto" }}>
        {[
          "Submit an online application via the CIC website.",
          "Pay the visa application fee and provide a photograph.",
          "Provide biometrics at a local visa application center (VAC).",
          "Submit the required documents and attend an interview (if needed).",
          "Receive a decision on the visa application.",
          "If approved, receive a port of entry letter of introduction and, if applicable, a temporary resident visa or an Electronic Travel Authorization (eTA).",
        ].map((step, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <ListItemText primary={step} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Job Prospects in Canada
      </Typography>
      <Typography variant="body1" paragraph>
        Canada offers an open and diverse job market, with significant demand
        for skilled professionals across various sectors. The work culture
        encourages international graduates to pursue their careers and explore
        potential residency options.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job Role</TableCell>
              <TableCell>Average Annual Salary (CAD)</TableCell>
              <TableCell>Average Annual Salary (INR)</TableCell>
              <TableCell>Additional Information</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                role: "Software Engineer",
                salaryCAD: "CAD 80,000",
                salaryINR: "INR 48,00,000 approx",
                info: "Expertise in programming languages",
              },
              {
                role: "Financial Analyst",
                salaryCAD: "CAD 70,000",
                salaryINR: "INR 42,00,000 approx",
                info: "In-depth financial market knowledge",
              },
              {
                role: "Graphic Designer",
                salaryCAD: "CAD 55,000",
                salaryINR: "INR 33,00,000 approx",
                info: "Proficiency in Adobe Suite",
              },
              {
                role: "Research Scientist",
                salaryCAD: "CAD 75,000",
                salaryINR: "INR 45,00,000 approx",
                info: "Scientific research acumen",
              },
              {
                role: "Business Analyst",
                salaryCAD: "CAD 72,000",
                salaryINR: "INR 43,20,000 approx",
                info: "Strong analytical skills",
              },
              {
                role: "Marketing Executive",
                salaryCAD: "CAD 60,000",
                salaryINR: "INR 36,00,000 approx",
                info: "Creativity in campaign planning",
              },
              {
                role: "Hospitality Manager",
                salaryCAD: "CAD 58,000",
                salaryINR: "INR 34,80,000 approx",
                info: "Strong leadership in hospitality",
              },
              {
                role: "Nurse",
                salaryCAD: "CAD 65,000",
                salaryINR: "INR 39,00,000 approx",
                info: "Compassionate patient care",
              },
              {
                role: "Data Analyst",
                salaryCAD: "CAD 68,000",
                salaryINR: "INR 40,80,000 approx",
                info: "Data visualization expertise",
              },
              {
                role: "Human Resources Manager",
                salaryCAD: "CAD 78,000",
                salaryINR: "INR 46,80,000 approx",
                info: "Employee relations expertise",
              },
            ].map((job, index) => (
              <TableRow key={index}>
                <TableCell>{job.role}</TableCell>
                <TableCell>{job.salaryCAD}</TableCell>
                <TableCell>{job.salaryINR}</TableCell>
                <TableCell>{job.info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Canada;
