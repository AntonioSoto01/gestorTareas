const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [];
app.use(express.static(__dirname));
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
app.get('/api/tasks', (req, res) => {

    res.json(tasks);
});
app.put('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const taskToUpdate = tasks.find(task => task.id === taskId);
    taskToUpdate.name = req.body.name;
    res.json(tasks);
});
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json(tasks);
});
app.delete('/api/tasks/', (req, res) => {
    tasks=[]
    res.json(tasks);
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
