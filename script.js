const form = document.getElementById('student-form');
const tableBody = document.getElementById('student-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const course = document.getElementById('course').value;
    const dob = document.getElementById('dob').value;

    const student = {
        firstName,
        lastName,
        course,
        dob
    };

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.course}</td>
        <td>${student.dob}</td>
    `;

    tableBody.appendChild(row);

    // Clear form fields
    form.reset();
});
