//Via: https://app.rize.education/courses/4751/resource/24d4eb83-f531-42f3-8828-e4190a5e9ef9?weekId=10838
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/university.db');

db.run(`
    INSERT INTO courses (courseCode, title, credits, description, semester) VALUES
        ('CS101', 'Intro Programming', 3, 'Learn Python basics', 'Fall 2024'),
        ('BIO120', 'General Biology', 3, 'Introduction to biological principles', 'Fall 2024'),
        ('MATH150', 'Calculus I', 4, 'Basic calculus', 'Fall 2024'),
        ('ENG101', 'Composition I', 3, 'Academic writing and critical thinking', 'Spring 2025'),
        ('ME210', 'Thermodynamics', 3, 'Principles of thermodynamics and heat transfer', 'Spring 2025'),
        ('CS301', 'Database Systems', 3, 'Design and implementation of database systems', 'Spring 2025'),
        ('PHYS201', 'Physics II', 4, 'Electricity, magnetism, and modern physics', 'Spring 2025'),
        ('CS201', 'Data Structures', 4, 'Study of fundamental data structures and algorithms', 'Spring 2025');
`)

console.log("Database seeded")
db.close()