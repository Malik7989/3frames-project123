const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let students = []; 
let nextId = 1; 

app.post('/students', (req, res) => {
    const student = { id: nextId++, ...req.body };
    students.push(student);
    res.status(201).send(student);
});

app.get('/students', (req, res) => {
    res.send(students);
});

app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    students = students.filter(student => student.id !== studentId);
    res.status(204).send();
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
