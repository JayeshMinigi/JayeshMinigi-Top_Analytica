// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const Papa = require('papaparse');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Serve static files (HTML, CSS, JS, Images)
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle form submissions
// app.post('/submit', (req, res) => {
//     const formData = req.body;
//     console.log('Form Data Received:', formData);

//     // Convert JSON to CSV
//     const csv = Papa.unparse([formData]);

//     // Debugging: Log the CSV data
//     console.log('CSV Data:', csv);

//     // Define the file path
//     const filePath = path.join(__dirname, 'public', 'survey_results.csv');

//     // Write the CSV to a file
//     fs.writeFile(filePath, csv, (err) => {
//         if (err) {
//             console.error('Error writing CSV file', err);
//             return res.status(500).json({ error: 'Error writing CSV file' });
//         }

//         // Send the file back to the client
//         res.download(filePath, 'survey_results.csv', (err) => {
//             if (err) {
//                 console.error('Error sending file', err);
//                 res.status(500).json({ error: 'Error sending file' });
//             } else {
//                 console.log('File sent successfully');
//             }
//         });
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const app = express();
const port = 3000;
const csvFilePath = path.join(__dirname, 'public', 'survey_results.csv');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);

    // Convert JSON to CSV
    const csv = Papa.unparse([formData]);

    // Check if the CSV file exists
    fs.access(csvFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File doesn't exist, create new and write headers
            const headers = Object.keys(formData).join(',');
            fs.writeFileSync(csvFilePath, `${headers}\n`);
        }

        // Append the new form data to the CSV file
        fs.appendFileSync(csvFilePath, `${csv}\n`);

        // Read the updated CSV file and send it to the client
        fs.readFile(csvFilePath, (err, data) => {
            if (err) {
                console.error('Error reading CSV file', err);
                return res.status(500).json({ error: 'Error reading CSV file' });
            }
            res.setHeader('Content-Disposition', 'attachment; filename="survey_results.csv"');
            res.setHeader('Content-Type', 'text/csv');
            res.send(data);
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
