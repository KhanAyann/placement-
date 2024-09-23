const students = [
    { name: "John Doe", prn: "12345", department: "CSE", cgpa: 8.5, niche: "AI", certifications: "Python", resume: "resume-john.pdf" },
    { name: "Jane Smith", prn: "54321", department: "ECE", cgpa: 7.8, niche: "Data Science", certifications: "AWS", resume: "resume-jane.pdf" },
    { name: "Alice Brown", prn: "23456", department: "IT", cgpa: 9.1, niche: "Web Development", certifications: "Data Science", resume: "resume-alice.pdf" },
    { name: "Mark Wilson", prn: "65432", department: "CSE", cgpa: 6.9, niche: "AI", certifications: "Python", resume: "resume-mark.pdf" },
    // Add more students here
];

const shortlistedStudents = [];

// Function to display students
function displayStudents(filteredStudents) {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = '';

    filteredStudents.forEach(student => {
        const studentRow = `
            <tr class="fade-in">
                <td>${student.name}</td>
                <td>${student.prn}</td>
                <td>${student.cgpa}</td>
                <td>${student.department}</td>
                <td>${student.niche}</td>
                <td>${student.certifications}</td>
                <td><a href="${student.resume}" class="btn btn-info" target="_blank">View Resume</a></td>
                <td><button class="btn btn-warning" onclick="shortlistStudent('${student.name}')">Shortlist</button></td>
            </tr>
        `;
        studentTableBody.insertAdjacentHTML('beforeend', studentRow);
    });
}

// Function to apply filters
function applyFilters() {
    const departmentFilter = document.getElementById('departmentFilter').value;
    const cgpaFilter = document.getElementById('cgpaFilter').value;
    const nicheFilter = document.getElementById('nicheFilter').value;
    const certificationFilter = document.getElementById('certificationFilter').value;

    const filteredStudents = students.filter(student => {
        const departmentMatch = departmentFilter === '' || student.department === departmentFilter;
        const cgpaMatch = cgpaFilter === '' || student.cgpa >= parseFloat(cgpaFilter);
        const nicheMatch = nicheFilter === '' || student.niche === nicheFilter;
        const certificationMatch = certificationFilter === '' || student.certifications === certificationFilter;
        return departmentMatch && cgpaMatch && nicheMatch && certificationMatch;
    });

    displayStudents(filteredStudents);
}

// Function to handle shortlisting
function shortlistStudent(studentName) {
    const student = students.find(st => st.name === studentName);
    if (shortlistedStudents.includes(student)) {
        alert(`${student.name} is already shortlisted!`);
        return;
    }

    shortlistedStudents.push(student);
    displayShortlistedStudents();
}

// Function to display shortlisted students
function displayShortlistedStudents() {
    const shortlistedStudentsTable = document.getElementById('shortlistedStudentsTable');
    shortlistedStudentsTable.innerHTML = '';

    shortlistedStudents.forEach(student => {
        const studentRow = `
            <tr class="fade-in">
                <td>${student.name}</td>
                <td>${student.prn}</td>
                <td>${student.cgpa}</td>
                <td>${student.department}</td>
                <td>${student.niche}</td>
                <td>${student.certifications}</td>
                <td><a href="${student.resume}" class="btn btn-info" target="_blank">View Resume</a></td>
            </tr>
        `;
        shortlistedStudentsTable.insertAdjacentHTML('beforeend', studentRow);
    });
}

// Function to download the list as SVG
function downloadSVG() {
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="${students.length * 30}">
            ${students.map((student, index) => `
                <text x="10" y="${30 * (index + 1)}" font-size="15">
                    ${index + 1}. ${student.name} (PRN: ${student.prn}, CGPA: ${student.cgpa})
                </text>
            `).join('')}
        </svg>
    `;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'students_list.svg';
    link.click();
}

// Initialize by displaying all students
displayStudents(students);
