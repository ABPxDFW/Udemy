var todos = ["Buy New Item"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
    // handle new input
    if(input === "list") {
        console.log(todos);
    }
    else if(input === "new") {
        // Ask for new todo
        var newTodo = prompt("Enter new todo");

        // add to todos array
        todos.push(newTodo);
    }

    // ask  again for new input
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");