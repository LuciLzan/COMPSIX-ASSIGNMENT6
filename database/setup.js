//Via: https://app.rize.education/courses/4751/resource/24d4eb83-f531-42f3-8828-e4190a5e9ef9?weekId=10838
const sqlite3 = require('sqlite3').verbose();

// Create/connect to database file

const db = new sqlite3.Database('./db/university.db');
console.log('Connected to SQLite database');

// Other setup.js code not shown
// Create products table
db.run(`
  CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
  )
`);

console.log('Courses table created');

db.close()