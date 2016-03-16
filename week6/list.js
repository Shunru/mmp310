<<<<<<< HEAD
function toaddlist(){
    var task = document.getElementById("task")
    var text = document.createTextNode(task.value)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("toAdd").appendChild(newItem)

}

todeletelist.onclick = function(){
    list.innerHTML ='';
}
=======

    var newTask = document.getElementById("newTask");
    var addButton = document.getElementByTagName("button");
    var incompleteTaskHolder= document.getElementById(incomplete-tasks");

    var completedTaskHolder= document.getElementById("completed-tasks");
>>>>>>> origin/gh-pages
