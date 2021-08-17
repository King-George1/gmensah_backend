const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//add a question
app.post('/addQuestion', async(req, res) => {
    try {
        const { question_title, description, tags } = req.body;
        const newQuestion = await pool.query("INSERT INTO Questions (question_title, description, tags) VALUES($1, $2, $3) RETURNING *", [question_title, description, tags]);
        res.json(newQuestion.rows[0]);
        

    } catch (err) {
        console.log(err.message);
    }
})


//get all questions
app.get("/questions", async (req, res) => {
    try {
        const allQuestions = await pool.query("SELECT * from Questions");
        res.json(allQuestions.rows);
        
    } catch (err) {
        console.log(err.message);
    }
})


//get a question
app.get("/questions/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const question = await pool.query("SELECT * FROM Questions WHERE question_id = $1",[id]);
        res.json(question.rows[0]);
    } catch (err) {
        console.log(err.message);
        
    }
})

//get tag names and their ids
app.get("/tags", async (req, res) => {
    try {
        const allTags = await pool.query("SELECT tag_id, tag_name from questiontags");
        res.json(allTags.rows);
        
    } catch (err) {
        console.log(err.message);
    }
})

//Get user detail
app.get("/users/user", async (req, res) => {
    try {
        
        const allQuestions = await pool.query("SELECT trainee_email, trainee_password from trainee");
        res.json(allQuestions.rows);
        
    } catch (err) {
        console.log(err.message);
    }
})

//Register a Trainee
app.post('/users', async(req, res) => {
    try {
        const { trainee_email, trainee_password, trainee_firstname,trainee_lastname } = req.body;
        const newQuestion = await pool.query("INSERT INTO trainee (trainee_email, trainee_password, trainee_firstname, trainee_lastname) VALUES($1, $2, $3, $4) RETURNING *", [trainee_email, trainee_password, trainee_firstname, trainee_lastname]);
        res.json(newQuestion.rows[0]);
        

    } catch (err) {
        console.log(err.message);
    }
})











app.listen(5000, () => {
    console.log("server has started on port 5000");
})