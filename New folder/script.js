const students = [
    {
        name: "John Doe",
        department: "CSE",
        cgpa: 8.5,
        package: "10L",
        resume: "resume-john.pdf",
        profilePhoto: "https://via.placeholder.com/80",
        steps: [
            "Step 1: Applied",
            "Step 2: Technical Interview",
            "Step 3: HR Interview",
            "Step 4: Offer Letter Received"
        ],
        profile: "Strong analytical skills, internships at XYZ."
    },
    {
        name: "Jane Smith",
        department: "ECE",
        cgpa: 9.0,
        package: "15L",
        resume: "resume-jane.pdf",
        profilePhoto: "https://via.placeholder.com/80",
        steps: [
            "Step 1: Applied",
            "Step 2: Technical Interview",
            "Step 3: HR Interview",
            "Step 4: Offer Letter Received"
        ],
        profile: "Experience in embedded systems, participated in robotics club."
    },
    {
        name: "Alice Brown",
        department: "CSE",
        cgpa: 7.5,
        package: "10L",
        resume: "resume-alice.pdf",
        profilePhoto: "https://via.placeholder.com/80",
        steps: [
            "Step 1: Applied",
            "Step 2: Group Discussion",
            "Step 3: Technical Interview",
            "Step 4: HR Interview",
            "Step 5: Offer Letter Received"
        ],
        profile: "Good programming skills, projects on machine learning."
    },
    // Add more students as needed...
];

function displayStudents() {
    const studentContainer = document.getElementById('studentContainer');
    const departments = {};

    students.forEach(student => {
        if (!departments[student.department]) {
            departments[student.department] = [];
        }
        departments[student.department].push(student);
    });

    for (const department in departments) {
        const departmentSeparator = document.createElement('div');
        departmentSeparator.classList.add('separator');
        departmentSeparator.innerText = department;
        studentContainer.appendChild(departmentSeparator);

        departments[department].forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.classList.add('student-card');
            studentCard.innerHTML = `
                <img src="${student.profilePhoto}" alt="${student.name}" class="student-photo">
                <div class="student-details">
                    <div class="student-header">
                        <h5>${student.name}</h5>
                        <a href="${student.resume}" download class="btn btn-success btn-sm">Download Resume</a>
                    </div>
                    <div class="profile-section">
                        <strong>Profile:</strong> ${student.profile}
                    </div>
                    <button class="btn btn-info btn-sm" onclick="showStudentDetails('${student.name}')">More Info</button>
                </div>
            `;
            studentContainer.appendChild(studentCard);
        });
    }
}

function showStudentDetails(name) {
    const student = students.find(s => s.name === name);
    const stepsHtml = student.steps.map(step => `<li>${step}</li>`).join('');
    document.getElementById('studentDetails').innerHTML = `
        <h5>${student.name}</h5>
        <p><strong>Department:</strong> ${student.department}</p>
        <p><strong>CGPA:</strong> ${student.cgpa}</p>
        <p><strong>Package:</strong> ${student.package}</p>
        <p><strong>Placement Procedure:</strong></p>
        <ul>${stepsHtml}</ul>
    `;
    const modal = new bootstrap.Modal(document.getElementById('studentModal'));
    modal.show();
}

function toggleFilterOptions() {
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.style.display = filterOptions.style.display === 'none' || filterOptions.style.display === '' ? 'block' : 'none';
}

function applyFilters() {
    const packageValue = document.getElementById('packageFilter').value;
    const departmentValue = document.getElementById('departmentFilter').value;
    const cgpaValue = document.getElementById('cgpaFilter').value;

    const filteredStudents = students.filter(student => {
        return (!packageValue || student.package === packageValue) &&
            (!departmentValue || student.department === departmentValue) &&
            (!cgpaValue || student.cgpa >= cgpaValue);
    });

    document.getElementById('studentContainer').innerHTML = '';
    filteredStudents.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('student-card');
        studentCard.innerHTML = `
            <img src="${student.profilePhoto}" alt="${student.name}" class="student-photo">
            <div class="student-details">
                <div class="student-header">
                    <h5>${student.name}</h5>
                    <a href="${student.resume}" download class="btn btn-success btn-sm">Download Resume</a>
                </div>
                <div class="profile-section">
                    <strong>Profile:</strong> ${student.profile}
                </div>
                <button class="btn btn-info btn-sm" onclick="showStudentDetails('${student.name}')">More Info</button>
            </div>
        `;
        document.getElementById('studentContainer').appendChild(studentCard);
    });
}

// Initial call to display students
displayStudents();
