const express = require('express');
const app = express();
const { authCourse, authPage } = require('./middleware/middleware');

app.use(express.json());

app.get('/', (req, res)=>{
    res.json("HOME PAGE");
});

app.get('/course/grades', authPage(["teacher", "admin"]), (req, res)=>{
    res.json({
        pedro: 100,
        paulo: 95,
        leo: 34,
        colin: 67
    });
});

app.get('/course/:number', authCourse, (req, res)=>{
    const courseNumber = req.params.number;
    res.json(`you have permission to see course ${courseNumber}`);
});

app.listen(5000, ()=>{
    console.log('server is listining on port 5000...');
});