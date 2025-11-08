// --- TX KRAITH GLOBAL SCRIPT ---

// Define API URL and DOM elements globally
// !! REMINDER: Replace with your actual SheetDB API URL !!
const ROSTER_API_URL = 'https://sheetdb.io/api/v1/o971c1bqm2649';
const ROSTER_GRID_ID = 'roster-list'; // ID from roster.html
const formPanel = document.querySelector('.form-panel form'); 

// =======================================================
// I. UTILITY & VISUAL FUNCTIONS
// =======================================================

/**
 * Adds a subtle neon glow effect to elements on hover.
 * This function can be called on the main page to enhance buttons/links.
 */
function applyNeonHoverEffects() {
    const glowElements = document.querySelectorAll('.nav-link, .primary-cta');
    glowElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.boxShadow = '0 0 15px #00ffff';
        });
        el.addEventListener('mouseout', () => {
            el.style.boxShadow = 'none';
        });
    });
}

/**
 * Initializes the script functions when the page loads.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Apply visual enhancements across the site
    applyNeonHoverEffects();
    
    // Only attempt to load roster if the roster-list element exists
    if (document.getElementById(ROSTER_GRID_ID)) {
        console.log('Roster page detected. Fetching guild data...');
        // We will call the custom SheetDB fetch function here later
        // fetchRosterDataAndRender(); 
    }

    // Only set up form submission if the form exists (on tryouts/auth pages)
    if (formPanel) {
        // setupFormSubmission(); 
    }
});


// =======================================================
// II. SHEETDB INTERACTION (CUSTOM FETCH)
// =======================================================

/**
 * Fetches the entire guild roster data from SheetDB.
 * This is an alternative to using the SheetDB Handlebars script for more control.
 */
async function fetchRosterDataAndRender() {
    const rosterGrid = document.getElementById(ROSTER_GRID_ID);
    if (!rosterGrid) return;

    try {
        const response = await fetch(ROSTER_API_URL);
        const data = await response.json();
        
        // Sort data by K/D ratio descending (optional, for maximum deadly flex)
        data.sort((a, b) => parseFloat(b.KD_Ratio) - parseFloat(a.KD_Ratio));

        let htmlContent = '';
        data.forEach(member => {
            // Check for required fields before rendering
            if (member.Name && member.Rank) {
                 htmlContent += `
                    <div class="member-card">
                        <h3>${member.Name}</h3>
                        <p>Role: <span class="stat">${member.Role || 'N/A'}</span></p>
                        <p>Current Rank: <span class="stat">${member.Rank}</span></p>
                        <p>Lifetime K/D: <span class="stat">${member.KD_Ratio || '0.0'}</span></p>
                        <p>Status: ${member.Status || 'Active'}</p>
                    </div>
                `;
            }
        });

        rosterGrid.innerHTML = htmlContent;
        
    } catch (error) {
        console.error("Error loading TX KRAITH roster:", error);
        rosterGrid.innerHTML = '<p class="error-message">Failed to load guild data. Check API key.</p>';
    }
}

// **Uncomment and use this line to enable the custom JavaScript fetch:**
// if (document.getElementById(ROSTER_GRID_ID)) {
//     fetchRosterDataAndRender();
// }


// =======================================================
// III. FORM SUBMISSION LOGIC (For Tryouts/Auth)
// =======================================================

/**
 * Handles the custom submission of forms (e.g., Tryout form) to SheetDB.
 */
// function setupFormSubmission() {
//     formPanel.addEventListener('submit', async (e) => {
//         e.preventDefault();
        
//         // Assuming your form is the Tryout form using the structure from previous response:
//         // const endpoint = 'YOUR_SHEETDB_API_URL?sheet=Tryouts';
        
//         // Show loading indicator
//         // formPanel.querySelector('button[type="submit"]').textContent = 'Submitting...';

//         // const formData = new FormData(formPanel);
//         // const response = await fetch(endpoint, {
//         //     method: 'POST',
//         //     body: formData,
//         // });

//         // if (response.ok) {
//         //     alert('Application submitted successfully! Check Discord for follow-up.');
//         //     formPanel.reset();
//         // } else {
//         //     alert('Submission failed. Please check the data and try again.');
//         // }
//     });
// }
