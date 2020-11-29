const express = require('express');
const bodyParser = require('body-parser');
const { reduce } = require('async');
const app = express()
const port = process.env.PORT || 5000


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', {
        tasks: tasks
    });
    console.log(tasks)
})

app.post('/addtask', (req, res) => {
    let newTask = req.body.taskName
    tasks.push(newTask)
    res.redirect('/');

})

app.delete('/deletepost', (req,res) => {
console.log(res)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})