# CP476-Assignment2

This repository contains the code for **CP476 Assignment 2 - Simple Student Registration Application**.

## Project Status

✅ XAMPP installed and configured

✅ Apache and MySQL services running

✅ phpMyAdmin connection verified

✅ MySQL database created

✅ Students table created

✅ PHP backend tested successfully

---

## Database Setup

### Database Name

```
college_data
```

### Table

```
students
```

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
- in your task search bar on your computer typ ein XAMPP and download

- Apache
- MySQL

---

### 2. Create the Database

Open:

```
http://localhost/phpmyadmin
```

Create a new database named:

```
college_data
```

Then create the **students** table using the SQL above.

---

### 3. Place PHP Files

Copy the backend PHP files into:

```
C:\xampp\htdocs\assignment2\
```

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

```
http://localhost/assignment2/students.php
```

Expected results:

- `[]` if the table is empty
- JSON data if student records exist

A test student was successfully inserted and retrieved, confirming the database connection works correctly.

---

## Current Progress

Completed:

- Database connection established
- PHP backend connected to MySQL
- JSON output verified
- CRUD foundation ready for the React frontend

---

## Next Steps

- Build the React frontend
- Create the student registration form
- Display students from the backend
- Connect React to the PHP API

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

   ```
   C:\xampp\htdocs\assignment2\
   ```

8. Update the MySQL password in `register.php` and `students.php` to match your local MySQL installation.
9. Verify the backend by visiting:

   ```
   http://localhost/assignment2/students.php
   ```

10. Commit your work to your own branch and open a Pull Request when your feature is complete.
```

If everything is configured correctly, you should receive either an empty JSON array (`[]`) or a list of student records.

---

## Repository

Course: **CP476**

Assignment: **Assignment 2 – Simple Student Registration Application**