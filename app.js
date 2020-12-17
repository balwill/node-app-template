// Web Service and Body-Parser
const express = require('express');
const bodyParser = require('body-parser');
const { reduce } = require('async');
const app = express()
const port = process.env.PORT || 5000

// uses ejs template
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let taskArray = [];
let completedTaskArray = [];

app.get('/', (req, res) => {
    res.render('index', {

    });

})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})