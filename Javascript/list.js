var todos = ["Buy New Item"];

var input = prompt("What would you like to do?");

if(input === "list") {
    console.log(todos);
}
else if(input === "new") {
    // Ask for new todo

    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);

}