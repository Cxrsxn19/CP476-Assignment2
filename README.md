# CP476-Assignment2
This repository contains the code for **CP476 Assignment 2 - Simple Student Registration Application**.

## Project Status
✅ XAMPP installed and configured
✅ Apache and MySQL services running
✅ phpMyAdmin connection verified
✅ MySQL database created
✅ Students table created
✅ PHP backend tested successfully
✅ React frontend built and connected to PHP backend
✅ Registration form submits and inserts into database
✅ Student Directory displays live data from database
✅ Basic styling applied (cards, layout)

---

## Database Setup

### Database Name

college_data

### Table

students

### SQL Used
```sql
CREATE TABLE students (
    studentID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    program VARCHAR(100) NOT NULL
);
```

---

## Local Setup Instructions

### 1. Install XAMPP
Install XAMPP and start the following services:
- In your task search bar, type XAMPP and download it from https://www.apachefriends.org
- Start **Apache**
- Start **MySQL**

---

### 2. Create the Database
Open:
http://localhost/phpmyadmin

Create a new database named: 
college_data

Then create the **students** table using the SQL above.

---

### 3. Place PHP Files
Copy the backend PHP files into:
C:\xampp\htdocs\assignment2\

Required files:
- register.php
- students.php

---

### 4. Configure Database Connection
Update both `register.php` and `students.php` with your local MySQL credentials.

Example:
```php
$host = "localhost";
$db   = "college_data";
$user = "root";
$pass = "YOUR_LOCAL_MYSQL_PASSWORD";
```

> **Important:** Every group member may have a different MySQL root password. Do **not** commit your personal password to GitHub.

---

### 5. Test the Backend
Open:
http://localhost/assignment2/students.php

Expected results:
- `[]` if the table is empty
- JSON data if student records exist

A test student was successfully inserted and retrieved, confirming the database connection works correctly.

---

### 6. Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Visit the URL shown in your terminal (usually `http://localhost:5173/`).

You should see:
- A **Student Registration** form (First Name, Last Name, Email, Program)
- A **Student Directory** table showing all registered students
- Submitting the form adds a new student and updates the directory automatically

---

## Current Progress

Completed:
- Database connection established
- PHP backend connected to MySQL
- JSON output verified
- React frontend built (Header, Footer, StudentForm, StudentList)
- Registration form validated and submitting successfully
- Student Directory fetching and displaying live data
- End-to-end pipeline tested: React form → PHP → MySQL → React display

---

## Next Steps as of July 15th 2026
- [ ] Polish styling: confirm hover effects, card layout, and responsive design work on mobile
- [ ] Add input placeholders / improve form UX where needed
- [ ] Clean up unused leftover Vite files (App.css, unused index.css rules)
- [ ] Clear out test data so student IDs are clean/sequential before final screenshots
- [ ] Take required screenshots (desktop registration page, desktop student list, mobile registration page)
- [ ] Write `reflection.pdf` (~200 words, 5 questions)
- [ ] Write `contribution.pdf` (equal contribution breakdown)
- [ ] Final review of all team members' pulled/tested branches
- [ ] Package and submit as `TeamLeadLastname_Firstname_476_Assignment2.zip`

---

## Notes for Group Members

Before starting development:
1. Clone the repository (or pull the latest changes if you've already cloned it).
2. Create your own branch from `main`: (DO NOT PUSH TO MAIN)
```bash
   git checkout main
   git pull origin main
   git checkout -b your-name-feature
```
3. Install XAMPP.
4. Start the **Apache** and **MySQL** services.
5. Create the `college_data` database.
6. Create the `students` table.
7. Place the PHP files inside:
C:\xampp\htdocs\assignment2\
8. Update the MySQL password in `register.php` and `students.php` to match your local MySQL installation.
9. Verify the backend by visiting:
http://localhost/assignment2/students.php

10. Run the frontend:
```bash
    cd frontend
    npm install
    npm run dev
```
11. Commit your work to your own branch and open a Pull Request when your feature is complete.

If everything is configured correctly, the registration form should submit successfully and new students should appear immediately in the Student Directory table.

---

## Repository
Course: **CP476**
Assignment: **Assignment 2 – Simple Student Registration Application**