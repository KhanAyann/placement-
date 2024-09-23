
// Script companies
// Hide all sections
function hideAllSections() {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
}

// Sidebar links event listeners
document.getElementById('home-link').addEventListener('click', function () {
    hideAllSections();
    document.getElementById('home-content').classList.remove('hidden');
});

document.getElementById('display-company-link').addEventListener('click', function () {
    hideAllSections();
    document.getElementById('company-content').classList.remove('hidden');
});

// Function to dynamically create company cards
function displayCompanies() {
    const companyContainer = document.getElementById('companyContainer');
    companyContainer.innerHTML = '';  // Clear previous content
    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');

        companyCard.innerHTML = `
                    <img src="${company.logo}" alt="${company.name} Logo" class="company-logo">
                    <div class="company-title">${company.name}</div>
                    <div class="company-description">${company.description}</div>
                `;

        companyContainer.appendChild(companyCard);
    });
}

// Load company cards on the Display Company page
document.getElementById('display-company-link').addEventListener('click', displayCompanies);




const companies = [
    {
        name: "Google",
        description: "Leading technology company specializing in internet services.",
        logo: "https://via.placeholder.com/300x150?text=Google+Logo",
        location: "USA",
        industry: "Tech",
        status: "Open",
        details: "Requirements: CS Degree, Placement History: Excellent, Openings: 5"
    },
    {
        name: "Microsoft",
        description: "Multinational corporation that develops, licenses, and sells software.",
        logo: "https://via.placeholder.com/300x150?text=Microsoft+Logo",
        location: "USA",
        industry: "Tech",
        status: "Closed",
        details: "Requirements: CS Degree, Placement History: Good, Openings: 0"
    },
    {
        name: "Microsoft",
        description: "Multinational corporation that develops, licenses, and sells software.",
        logo: "https://via.placeholder.com/300x150?text=Microsoft+Logo",
        location: "USA",
        industry: "Tech",
        status: "Closed",
        details: "Requirements: CS Degree, Placement History: Good, Openings: 0"
    },
    {
        name: "Microsoft",
        description: "Multinational corporation that develops, licenses, and sells software.",
        logo: "https://via.placeholder.com/300x150?text=Microsoft+Logo",
        location: "USA",
        industry: "Tech",
        status: "Closed",
        details: "Requirements: CS Degree, Placement History: Good, Openings: 0"
    }
];

function displayCompanies() {
    const companyContainer = document.getElementById('companyContainer');
    companyContainer.innerHTML = '';  // Clear previous content
    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');
        companyCard.innerHTML = `
                    <img src="${company.logo}" alt="${company.name} Logo" class="company-logo">
                    <div class="company-title">${company.name}</div>
                    <div class="badge-status ${company.status === 'Closed' ? 'closed' : ''}">
                        ${company.status === 'Open' ? 'Hiring' : 'Not Hiring'}
                    </div>
                `;

        companyCard.addEventListener('click', function () {
            showCompanyDetails(company);
        });

        companyContainer.appendChild(companyCard);
    });
}

function showCompanyDetails(company) {
    document.getElementById('companyDetails').innerHTML = `
                <h5>${company.name}</h5>
                <p>${company.details}</p>
            `;
    const modal = new bootstrap.Modal(document.getElementById('companyModal'));
    modal.show();
}

// Function to filter companies
function filterCompanies() {
    const location = document.getElementById('locationFilter').value;
    const industry = document.getElementById('industryFilter').value;
    const status = document.getElementById('statusFilter').value;

    const filteredCompanies = companies.filter(company => {
        return (!location || company.location === location) &&
            (!industry || company.industry === industry) &&
            (!status || company.status === status);
    });

    const companyContainer = document.getElementById('companyContainer');
    companyContainer.innerHTML = ''; // Clear container
    filteredCompanies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');
        companyCard.innerHTML = `
                    <img src="${company.logo}" alt="${company.name} Logo" class="company-logo">
                    <div class="company-title">${company.name}</div>
                    <div class="badge-status ${company.status === 'Closed' ? 'closed' : ''}">
                        ${company.status === 'Open' ? 'Hiring' : 'Not Hiring'}
                    </div>
                `;
        companyCard.addEventListener('click', function () {
            showCompanyDetails(company);
        });

        companyContainer.appendChild(companyCard);
    });
}

// Initialize company display
document.addEventListener("DOMContentLoaded", displayCompanies);










//Script for statistics

// Call the function to display charts on page load
document.addEventListener("DOMContentLoaded", function () {
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const ctxLine = document.getElementById('lineChart').getContext('2d');

    // Bar chart data
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Highest', 'Average'],
            datasets: [{
                label: 'Packages',
                data: [18, 7],
                backgroundColor: ['#007bff', '#ffc107']
            }]
        }
    });

    // Line chart data
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Ongoing Interviews',
                data: [5, 10, 8, 15, 12, 20],
                backgroundColor: '#17a2b8',
                borderColor: '#17a2b8',
                fill: false
            }]
        }
    });
});

