

# Student Management System

A full-stack web application for managing student data, including the ability to add, view, and delete students. This project demonstrates CRUD operations using a Node.js backend and a simple HTML/CSS/JavaScript frontend.

---

## Features

- **Add Students**: Users can add students with details like first name, last name, course, and date of birth.
- **View Students**: Displays a dynamic list of all registered students in a table format.
- **Delete Students**: Users can delete specific student records.
- **Real-Time Updates**: Automatically refreshes the student list after adding or deleting a record.

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Postman API for testing server

---

## Setup Instructions

### Backend Setup
1. Navigate to the `student-backend` folder.
2. Run `npm init -y` to create a `package.json` file.
3. Install dependencies:  
   ```bash
   npm install express cors
   ```
4. Start the server:  
   ```bash
   node server.js
   ```
   The backend server will run on `http://localhost:5000`.

---

### Frontend Setup
1. Open `index.html` from the `student-frontend` folder in any modern web browser.
2. Ensure the backend server is running for full functionality.

---

## API Endpoints

1. **POST /students**  
   Adds a new student.  
   **Body**:  
   ```json
   {
       "firstName": "John",
       "lastName": "Doe",
       "course": "BTech",
       "dob": "2000-01-01"
   }
   ```

2. **GET /students**  
   Retrieves the list of all students.  
   **Response**:  
   ```json
   [
       {
           "id": 1,
           "firstName": "John",
           "lastName": "Doe",
           "course": "BTech",
           "dob": "2000-01-01"
       }
   ]
   ```

3. **DELETE /students/:id**  
   Deletes a student by their ID.

---

## How to Use

1. **Add a Student**:
   - Fill out the registration form on the frontend.
   - Click "Submit" to add the student to the list.

2. **View Students**:
   - All registered students will appear in a dynamic table.

3. **Delete a Student**:
   - Click the "Delete" button for a specific student to remove them from the list.

---

## Folder Structure

```
project3/
├── student-frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── server.js
```

---

## Future Enhancements

- **Edit Functionality**: Add the ability to update student details.
- **Search and Filter**: Allow users to search and filter student records.
- **Database Integration**: Replace in-memory storage with a database like MongoDB or MySQL.
- **Responsive Design**: Optimize the frontend for mobile devices.

---

## Screenshots

**Add Student Form** 

<img width="664" alt="Screenshot 2024-12-18 at 10 03 40 PM" src="https://github.com/user-attachments/assets/df2b3f3c-f3d2-4f3b-8dd1-007c634602dd" />

**Postman Server responses**

<img width="972" alt="Screenshot 2024-12-18 at 10 04 04 PM" src="https://github.com/user-attachments/assets/27d74264-87c9-4162-9c73-4b7cc15da1a8" />

---

## License

This project is licensed under the MIT License.

---

Feel free to modify this template according to your project specifics!
