// document.getElementById('surveyForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     const jsonData = {};

//     formData.forEach((value, key) => {
//         jsonData[key] = value;
//     });

//     // Debugging: Log the jsonData before sending
//     console.log('Form Data to be Sent:', jsonData);

//     try {
//         const response = await fetch('/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(jsonData)
//         });

//         if (response.ok) {
//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = 'survey_results.csv';
//             document.body.appendChild(a);
//             a.click();
//             a.remove();
//         } else {
//             const errorData = await response.json();
//             console.error('Error:', errorData.error);
//             alert('An error occurred. Please try again.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const casteSelect = document.getElementById("castes");
//     const otherCasteInput = document.getElementById("otherCastes");

//     casteSelect.addEventListener("change", function() {
//         if (casteSelect.value === "Other") {
//             otherCasteInput.style.display = "block";
//             otherCasteInput.required = true;
//         } else {
//             otherCasteInput.style.display = "none";
//             otherCasteInput.required = false;
//             otherCasteInput.value = "";
//         }
//     });

//     const schemeSelect = document.getElementById("central_schemes");
//     const otherSchemeInput = document.getElementById("otherSchemes");

//     schemeSelect.addEventListener("change", function() {
//         if (schemeSelect.value === "Other") {
//             otherSchemeInput.style.display = "block";
//             otherSchemeInput.required = true;
//         } else {
//             otherSchemeInput.style.display = "none";
//             otherSchemeInput.required = false;
//             otherSchemeInput.value = "";
//         }
//     });

//     const pmSelect = document.getElementById("next_pms");
//     const otherPmInput = document.getElementById("otherPms");

//     pmSelect.addEventListener("change", function() {
//         if (pmSelect.value === "Other") {
//             otherPmInput.style.display = "block";
//             otherPmInput.required = true;
//         } else {
//             otherPmInput.style.display = "none";
//             otherPmInput.required = false;
//             otherPmInput.value = "";
//         }
//     });

//     const stateSelect = document.getElementById("state_schemes");
//     const otherStateInput = document.getElementById("otherStates");

//     stateSelect.addEventListener("change", function() {
//         if (stateSelect.value === "Other") {
//             otherStateInput.style.display = "block";
//             otherStateInput.required = true;
//         } else {
//             otherStateInput.style.display = "none";
//             otherStateInput.required = false;
//             otherStateInput.value = "";
//         }
//     });
// });

// jayesh
// document.getElementById('surveyForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     const jsonData = {};

//     formData.forEach((value, key) => {
//         jsonData[key] = value;
//     });

//     // Debugging: Log the jsonData before sending
//     console.log('Form Data to be Sent:', jsonData);

//     try {
//         const response = await fetch('/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(jsonData)
//         });

//         if (response.ok) {
//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = 'survey_results.csv';
//             document.body.appendChild(a);
//             a.click();
//             a.remove();
//         } else {
//             const errorData = await response.json();
//             console.error('Error:', errorData.error);
//             alert('An error occurred. Please try again.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     }
// });

// // Function to toggle visibility of other inputs based on dropdown selection
// function toggleOtherInput(selectElement, otherInput) {
//     if (selectElement.value === "Other") {
//         otherInput.style.display = "block";
//         otherInput.required = true;
//     } else {
//         otherInput.style.display = "none";
//         otherInput.required = false;
//         otherInput.value = "";
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const casteSelect = document.getElementById("castes");
//     const otherCasteInput = document.getElementById("otherCastes");

//     casteSelect.addEventListener("change", function() {
//         toggleOtherInput(casteSelect, otherCasteInput);
//     });

//     const schemeSelect = document.getElementById("central_schemes");
//     const otherSchemeInput = document.getElementById("otherSchemes");

//     schemeSelect.addEventListener("change", function() {
//         toggleOtherInput(schemeSelect, otherSchemeInput);
//     });

//     const pmSelect = document.getElementById("next_pms");
//     const otherPmInput = document.getElementById("otherPms");

//     pmSelect.addEventListener("change", function() {
//         toggleOtherInput(pmSelect, otherPmInput);
//     });

//     const stateSelect = document.getElementById("state_schemes");
//     const otherStateInput = document.getElementById("otherStates");

//     stateSelect.addEventListener("change", function() {
//         toggleOtherInput(stateSelect, otherStateInput);
//     });
// });


document.getElementById('surveyForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Debugging: Log the jsonData before sending
    console.log('Form Data to be Sent:', jsonData);

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'survey_results.csv';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData.error);
            alert('An error occurred. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

// Function to toggle visibility of other inputs based on dropdown selection
function toggleOtherInput(selectElement, otherInput) {
    if (selectElement.value === "Other") {
        otherInput.style.display = "block";
        otherInput.required = true;
    } else {
        otherInput.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const casteSelect = document.getElementById("castes");
    const otherCasteInput = document.getElementById("otherCastes");

    casteSelect.addEventListener("change", function() {
        toggleOtherInput(casteSelect, otherCasteInput);
    });

    const schemeSelect = document.getElementById("central_schemes");
    const otherSchemeInput = document.getElementById("otherSchemes");

    schemeSelect.addEventListener("change", function() {
        toggleOtherInput(schemeSelect, otherSchemeInput);
    });

    const pmSelect = document.getElementById("next_pms");
    const otherPmInput = document.getElementById("otherPms");

    pmSelect.addEventListener("change", function() {
        toggleOtherInput(pmSelect, otherPmInput);
    });

    const stateSelect = document.getElementById("state_schemes");
    const otherStateInput = document.getElementById("otherStates");

    stateSelect.addEventListener("change", function() {
        toggleOtherInput(stateSelect, otherStateInput);
    });
});
