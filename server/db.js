const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: 'capstone',
    host: 'localhost',
    port: 5432,
    database: 'ForumQuestions'
});

module.exports = pool;