const form = document.getElementById('student-form');
const tableBody = document.getElementById('student-data');

loadStudents();

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const student = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        course: document.getElementById('course').value,
        dob: document.getElementById('dob').value,
    };

    try {
        await fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });

        form.reset();
        loadStudents(); 
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to add student. Please try again.');
    }
});

async function loadStudents() {
    try {
        const response = await fetch('http://localhost:5000/students');
        const students = await response.json();

        tableBody.innerHTML = '';
        if (students.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5">No students found</td></tr>';
            return;
        }

        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.course}</td>
                <td>${student.dob}</td>
                <td><button onclick="deleteStudent(${student.id})">Delete</button></td> <!-- Delete button -->
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
        tableBody.innerHTML = '<tr><td colspan="5">Failed to load students</td></tr>';
    }
}

async function deleteStudent(id) {
    try {
        await fetch(`http://localhost:5000/students/${id}`, {
            method: 'DELETE',
        });

        loadStudents(); 
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to delete student. Please try again.');
    }
}
