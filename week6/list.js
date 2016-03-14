function toaddlist(){
    var task = document.getElementById("task")
    var text = document.createTextNode(task.value)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("toAdd").appendChild(newItem)
}
