# CP-476-B - Internet Computing – Assignment 02
This repository contains the code for **Assignment 02 - Simple Student Registration Application**.

This assignment is a full-stack development task based on the technologies learned in class. The goal is to create a simple student registration application for a small college. The application consists of a student registration page and a student directory page.

### Group Members: 
- Carson Yee (team lead)
- Aidan MacLeod
- Adam Bondi
- Janaki Patel
- Evan Parisitto

GitHub contribution history is shown here: [Contributions](https://github.com/Cxrsxn19/CP476-Assignment2/graphs/contributors?from=4%2F25%2F2026). Full contributions, including screenshots, architecture formatting, code development, reflection, styling, testing & validation, etc., are shown here: [contribution.pdf](https://github.com/Cxrsxn19/CP476-Assignment2/blob/main/contribution.pdf). 

Reflection questions discussing the assignment's workflow, technologies, and challenges can be found here: [Reflection](https://github.com/Cxrsxn19/CP476-Assignment2/blob/main/reflection.pdf). 

## Database Setup
### Database Name: 
college_data
### Table: 
students

### SQL CREATE Command Used
```sql
CREATE TABLE students (
    studentID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    program VARCHAR(100) NOT NULL
);
```

## Local Setup Instructions - Testing & Validation
### 1. Install XAMPP
Install XAMPP (from https://www.apachefriends.org) and start the following services:
- **Apache**
- **MySQL**

### 2. Create the Database
- Open: http://localhost/phpmyadmin
- Create a new database named: **college_data**
- Then create the **students** table using the SQL command above.

### 3. PHP File Location
- Copy the backend PHP files into: C:\xampp\htdocs\assignment2\
- Structure:
 ```
  htdocs/
    assignment2/
        register.php
        students.php
```

### 4. Configure Database Connection
Update both `register.php` and `students.php` with your local MySQL credentials. For XAMPP, the local MySQL installation has no password. 

_Example:_ 
```php
$host = "localhost";
$db   = "college_data";
$user = "root";
$pass = "";
```

### 5. Test & Verify the Backend
- Open: http://localhost/assignment2/students.php
- Expected results:
  - `[]` if the table is empty
  - JSON data if student records exist

Our team successfully inserted and retrieved a test student, confirming the database connection works correctly.

### 6. Run the Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit the URL shown in your terminal (usually `http://localhost:5173/`).

Final Application Results:
- Page 1 (LHS): a **Student Registration** form (First Name, Last Name, Email, Program)
- Page 2 (RHS): a **Student Directory** table showing all registered students in the database

Functionality: submitting the form adds a new student and automatically updates the directory.

## Project Status (for group members) 
- XAMPP installed and configured
- Apache and MySQL services running
- phpMyAdmin backend connection verified to MySQL
- MySQL _college_ database created and database connection established
- _students_ table created
- JSON output verified
- PHP backend tested successfully
- React frontend built (Header, Footer, StudentForm, StudentList)
- Frontend-backend connection confirmed
- Registration form validated: submits and inserts into database successfully
- Student Directory fetching and displaying live data from database
- Basic styling applied (cards, layout, input placeholders)
- Polished styling: hover effects, card layout, and responsive design
- Cleaned up leftover/unused files
- Cleared out test data so student IDs are clean/sequential before final screenshots
- End-to-end pipeline tested: React form → PHP → MySQL → React display
- Took required screenshots (desktop registration page, desktop student list, mobile registration page)
- Wrote `reflection.pdf` (~200 words, 5 questions)
- Wrote `contribution.pdf` (equal contribution breakdown)
- Completed final review of all team members' pulled/tested branches and file architecture & formatting

## Next Steps
- Ensure all necessary files are included and saved in the correct format.
- Package and submit as `TeamLeadLastname_Firstname_476_Assignment2.zip`.

## Notes
Before committing development changes:
- Clone the repository (or pull the latest changes if you've already cloned it).
- Create your own branch from `main` (DO NOT PUSH TO MAIN)
```bash
   git checkout main
   git pull origin main
   git checkout -b your-name-feature
```
- Commit your work to your own branch and open a Pull Request when your feature is complete.
- If everything is configured correctly, the registration form should submit successfully, and new students should appear immediately in the Student Directory table.
