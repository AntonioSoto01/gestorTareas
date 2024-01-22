document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("addForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("addTask").value;
        addTask(name)
    })
    loadTable();
})


function addTask(name) {
    fetch('http://localhost:3000/api/tasks',{
        method:'POST',
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify({name}),
    })
    .then(response=>response.json())
    .then(data=>{})
    .catch(error=>console.error("Error al añadir tarea",error))
}
