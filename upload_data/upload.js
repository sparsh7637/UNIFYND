const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin SDK
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Paths to your JSON files
const dataFilePath = './database_usa_full.json';
const searchFilePath = './search.json';

// Function to generate search JSON and upload data to Firestore
const processAndUploadData = async () => {
  try {
    // Read JSON data from file
    const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

    // Initialize a counter for generating Tag values and searchMap
    let counter = 1;
    const searchMap = {};
    const collectionRef = db.collection('usclg'); // Name of your Firestore collection

    // Loop through each entry in the JSON data
    for (const entry of jsonData) {
      try {
        // Generate Tag in the format US0001, US0002, etc.
        const docId = `US${String(counter).padStart(4, '0')}`;

        // Upload data to Firestore
        await collectionRef.doc(docId).set({
          Tag: docId,
          "cost_booksupply": entry['cost_booksupply'] || 0,
          "cost_tuition": entry['cost_tuition'] || 0,
          "cost_other": entry['cost_other'] || 0,
          "earnings_1": entry['earnings_1'] || 0,
          "admission_rate": entry['admission_rate'] || 0,
          "grad_students": entry['grad_students'] || 0,
          "cost_roomboard_oncampus": entry['cost_roomboard_oncampus'] || 0,
          "cost_roomboard_offcampus": entry['cost_roomboard_offcampus'] || 0,
          "act_75_cumulative": entry['act_75_cumulative'] || 0,
          "act_75_english": entry['act_75_english'] || 0,
          "act_75_math": entry['act_75_math'] || 0,
          "act_75_writing": entry['act_75_writing'] || 0,
          "sat_75_critical_reading": entry['sat_75_critical_reading'] || 0,
          "sat_75_math": entry['sat_75_math'] || 0,
          "sat_75_writing": entry['sat_75_writing'] || 0,
          "subject_agriculture": entry['subject_agriculture'] || 0,
          "subject_resources": entry['subject_resources'] || 0,
          "subject_architecture": entry['subject_architecture'] || 0,
          "subject_ethnic_cultural_gender": entry['subject_ethnic_cultural_gender'] || 0,
          "subject_communication": entry['subject_communication'] || 0,
          "subject_communications_technology": entry['subject_communications_technology'] || 0,
          "subject_computer": entry['subject_computer'] || 0,
          "subject_personal_culinary": entry['subject_personal_culinary'] || 0,
          "subject_education": entry['subject_education'] || 0,
          "subject_engineering": entry['subject_engineering'] || 0,
          "subject_engineering_technology": entry['subject_engineering_technology'] || 0,
          "subject_language": entry['subject_language'] || 0,
          "subject_family_consumer_science": entry['subject_family_consumer_science'] || 0,
          "subject_legal": entry['subject_legal'] || 0,
          "subject_english": entry['subject_english'] || 0,
          "subject_humanities": entry['subject_humanities'] || 0,
          "subject_library": entry['subject_library'] || 0,
          "subject_biological": entry['subject_biological'] || 0,
          "subject_mathematics": entry['subject_mathematics'] || 0,
          "subject_military": entry['subject_military'] || 0,
          "subject_multidiscipline": entry['subject_multidiscipline'] || 0,
          "subject_parks_recreation_fitness": entry['subject_parks_recreation_fitness'] || 0,
          "subject_philosophy_religious": entry['subject_philosophy_religious'] || 0,
          "subject_theology_religious_vocation": entry['subject_theology_religious_vocation'] || 0,
          "subject_physical_science": entry['subject_physical_science'] || 0,
          "subject_science_technology": entry['subject_science_technology'] || 0,
          "subject_psychology": entry['subject_psychology'] || 0,
          "subject_security_law_enforcement": entry['subject_security_law_enforcement'] || 0,
          "subject_public_administration_social_service": entry['subject_public_administration_social_service'] || 0,
          "subject_social_science": entry['subject_social_science'] || 0,
          "subject_construction": entry['subject_construction'] || 0,
          "subject_mechanic_repair_technology": entry['subject_mechanic_repair_technology'] || 0,
          "subject_precision_production": entry['subject_precision_production'] || 0,
          "subject_transportation": entry['subject_transportation'] || 0,
          "subject_visual_performing": entry['subject_visual_performing'] || 0,
          "subject_health": entry['subject_health'] || 0,
          "subject_business_marketing": entry['subject_business_marketing'] || 0,
          "subject_history": entry['subject_history'] || 0,
          "school_name": entry['school_name'] || "",
          "school_city": entry['school_city'] || "",
          "school_state": entry['school_state'] || "",
          "school_school_url": entry['school_school_url'] || "",
          "school_price_calculator_url": entry['school_price_calculator_url'] || "",
          "school_alias": entry['school_alias'] || "",
          "id": entry['id'] || 0,
          "qs_score": entry['qs_score'] || "n/a",
          "qs_rank": entry['qs_rank'] || "",
          "locationLat": entry['locationLat'] || 0,
          "locationLon": entry['locationLon'] || 0
        });

        console.log(`Uploaded document with ID: ${docId}`);

        // Add to searchMap
        const schoolName = entry['school_name'];
        if (schoolName) {
          searchMap[schoolName] = docId;
        }

        // Increment the counter for the next Tag
        counter++;
      } catch (entryError) {
        console.error(`Error uploading document with Tag ${docId}:`, entryError);
      }
    }

    // Write the searchMap to a new JSON file
    fs.writeFileSync(searchFilePath, JSON.stringify(searchMap, null, 2), 'utf8');
    console.log('search.json file has been created.');

    console.log('Data upload and search JSON generation completed successfully.');
  } catch (error) {
    console.error('Error processing data:', error);
  }
};

// Call the function to process data and upload to Firestore
processAndUploadData();
