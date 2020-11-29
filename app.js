const express = require('express');
const bodyParser = require('body-parser');
const { reduce } = require('async');
const app = express()
const port = process.env.PORT || 5000


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let taskArray = [];
let completedTaskArray = [];

app.get('/', (req, res) => {
    res.render('index', {
        taskArray: taskArray
    });
    console.log(`Incomplete Tasks: ${taskArray}`)
    console.log(`Complete Tasks: ${completedTaskArray}`)
})

app.post('/addtask', (req, res) => {
    let newTask = req.body.taskName
    taskArray.push(newTask)
    res.redirect('/');

})

app.post('/deletetask', (req,res) => {
    
    let selectedTasks = req.body.completedTask;

    console.log(req.body)

    if (typeof selectedTasks == 'object') {
        selectedTasks.forEach(selectedTask => {
            // let alreadyCompleted = completedTaskArray.includes(selectedTask)
            // if (!alreadyCompleted) {
                completedTaskArray.push(selectedTask)
                let indexOfTaskToDelete = taskArray.indexOf(selectedTask)
                taskArray.splice(indexOfTaskToDelete, 1)
            // }
        });
    } else {
        // let alreadyCompleted = completedTaskArray.includes(selectedTasks)
        // if (!alreadyCompleted) {
            completedTaskArray.push(selectedTasks)
            let indexOfTaskToDelete = taskArray.indexOf(selectedTasks)
            taskArray.splice(indexOfTaskToDelete, 1)
        // }
    }

    res.redirect('/')
    
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})