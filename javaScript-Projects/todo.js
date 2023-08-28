const form1 = document.getElementById("form");
const input1 = document.getElementById("input");
const listTodo1 = document.getElementById("listTodoId");

form1.addEventListener("submit", (e)=>{
    e.preventDefault();

    const todoList = input1.value;

    if(todoList){
        const listTodoNew = document.createElement('li');

        listTodoNew.innerText = todoList;

        listTodoNew.addEventListener("click", ()=>{
            listTodoNew.classList.toggle("completed");
        });

        listTodoNew.addEventListener("contextmenu", (e)=>{ // right clicking will delete it.  
            e.preventDefault();

            listTodoNew.remove();
        });

        listTodo1.appendChild(listTodoNew);

        input1.value = "";
    }
});