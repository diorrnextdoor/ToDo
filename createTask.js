function createTask(task) {

    fetch('http://localhost:3000/tasks', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body:JSON.stringify(task)

    }).then(()=>{

        alert("Yey.. Task created");

    }).catch(()=>

    alert("Something went wrong! : (");
    });

};


document.addEventListener("DOMContentLoaded", ()=>{

    const createTaskForm = document.getElementById('createTaskForm');

    createTaskForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const creatTaskFormData = new FormData({title: createTaskFormData.get('title')});

    });

});