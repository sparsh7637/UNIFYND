import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const NewZealand = () => {
  return (
    <Container>
      {/* Key Facts Section */}
      <Typography variant="h4" gutterBottom>
        Key Facts about Studying in New Zealand
      </Typography>
      <Typography variant="body1" gutterBottom>
        New Zealand offers world-class education with a supportive learning
        environment. Here are some key facts:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Capital: Wellington" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Official Languages: English, Māori" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Top Universities: University of Auckland, University of Otago, and more" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Work Opportunities: Post-study work visa up to 3 years" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Affordable tuition fees and high quality of life" />
        </ListItem>
      </List>
      <Divider />

      {/* Benefits Section */}
      <Typography variant="h4" gutterBottom>
        Top 10 Benefits of Studying in New Zealand
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Globally recognized qualifications" />
        </ListItem>
        <ListItem>
          <ListItemText primary="High quality of life and scenic landscapes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Safe and inclusive society" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Work while studying for international students" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Innovative and research-oriented education system" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Post-study work visa opportunities" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Easy access to Asia-Pacific business hubs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Support for international students" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Opportunities to stay and work after graduation" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Diverse courses and programs" />
        </ListItem>
      </List>
      <Divider />

      {/* Popular Courses Section */}
      <Typography variant="h4" gutterBottom>
        Popular Courses in New Zealand
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Engineering and Technology" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Health Sciences" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Environmental Studies" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Business and Management" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Information Technology" />
        </ListItem>
      </List>
      <Divider />

      {/* Visa Requirements Section */}
      <Typography variant="h4" gutterBottom>
        New Zealand Student Visa Requirements
      </Typography>
      <Typography variant="body1" gutterBottom>
        To study in New Zealand, international students need a student visa.
        Here are the key requirements:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Confirmation of Enrollment (Offer of Place)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Proof of Funds for Tuition and Living Costs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Medical and Travel Insurance" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Valid Passport" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Police Clearance Certificate (if applicable)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Proof of English language proficiency" />
        </ListItem>
      </List>
      <Divider />

      {/* Required Documents Section */}
      <Typography variant="h4" gutterBottom>
        Documents Required for Studying in New Zealand
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Passport-sized photographs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Academic Transcripts and Certificates" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Proof of English Proficiency (IELTS/TOEFL)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Offer Letter from a New Zealand educational institution" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Evidence of Financial Support" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Proof of Health Insurance" />
        </ListItem>
      </List>
      <Divider />

      {/* Job Prospects Section */}
      <Typography variant="h4" gutterBottom>
        Job Prospects After Studying in New Zealand
      </Typography>
      <Typography variant="body1" gutterBottom>
        New Zealand offers great job opportunities for international students
        after graduation, especially in sectors like:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Information Technology (IT)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Engineering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Healthcare" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Environmental Science" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tourism and Hospitality" />
        </ListItem>
      </List>
    </Container>
  );
};

export default NewZealand;
