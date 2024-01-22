const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [];
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        name: req.body.name,
    };

    tasks.push(newTask);

    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
