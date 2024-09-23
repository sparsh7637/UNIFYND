const fs = require('fs');

function generateSearchJson() {
  // Read the local JSON file
  const data = JSON.parse(fs.readFileSync('./upload_data/database_usa_full.json', 'utf8'));

  let counter = 1;
  const searchMap = {};

  // Process each entry in the JSON array
  data.forEach(entry => {
    const schoolName = entry.school_name;
    const uniqueId = `US${String(counter).padStart(4, '0')}`;
    searchMap[schoolName] = uniqueId;
    counter++;
  });

  // Write the searchMap to a new JSON file
  fs.writeFileSync('search.json', JSON.stringify(searchMap, null, 2), 'utf8');
  console.log('search.json file has been created.');
}

// Run the function
generateSearchJson();
