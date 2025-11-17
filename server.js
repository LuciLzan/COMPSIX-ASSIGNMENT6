//Via: https://app.rize.education/courses/4751/resource/24d4eb83-f531-42f3-8828-e4190a5e9ef9?weekId=10838
const sqlite3 = require('sqlite3').verbose();

// Create/connect to database file

const db = new sqlite3.Database('./database/db/university.db');
console.log('Connected to SQLite database');

//Via https://app.rize.education/courses/4751/resource/b093c68c-a3fe-48f8-81f4-d1a710458eb0?weekId=10837
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.listen(port, () => {
    console.log(`API server running at
    http://localhost:${port}`);
});


//GET /api/courses - SELECT all courses
app.get('/api/courses', (req, res) => {
    db.all('SELECT * FROM courses', (err, rows) => {
        res.json(rows);
    });
})
// GET /api/courses/:id - SELECT course by ID
app.get('/api/courses/:id', (req, res) => {
    db.all(`SELECT * FROM courses WHERE id=${parseInt(req.params.id)}`, (err, rows) => {
        if(rows.length < 1){
            res.status(404).send('No course found');
        }else {
            res.json(rows);
        }
    });
})
// POST /api/courses - INSERT new course
app.post('/api/courses', (req, res) => {
    const id = req.params.id;
    const {courseCode, title, credits, description, semester} = req.body;
    db.run(`
    INSERT INTO courses (courseCode, title, credits, description, semester) VALUES (?, ?, ?, ?, ?)`,
        [courseCode, title, credits, description, semester], function(err) {
        console.log('New course created:');
        res.status(201).send({message:"New course was created."});
});
})
// PUT /api/courses/:id - UPDATE existing course
app.put('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    const {courseCode, title, credits, description, semester} = req.body;
    db.run(`UPDATE courses SET courseCode = ?, title = ?, credits = ?, description = ?, semester = ? WHERE id = ? 
        `, [courseCode,title, credits, description, semester, id],
        function(err) {
            res.json({ message: 'Course Updated successfully.'
            });
        }
    );
})
// DELETE /api/courses/:id - DELETE course
app.delete('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM courses WHERE id = ?`, [id],
    function(err) {
        res.json({message: 'Product deleted'});
    })
})