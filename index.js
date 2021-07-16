// - Display an alert with the username and all the todos titles that belong to that user
//Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the
//option to repeatedly choose a different user, or to finish the program

console.log("users: ", users);
console.log("todos: ", todos);

let message = " "; 

for (i = 0; i < users.length; i++ ) { 
    console.log("Start of Iteration # ", i + 1 );
    const id = users[i].id;
    const name = users[i].name;
    const city = users[i].address.city;
    const row = ` ${id} | ${name} | ${city}\n`;
    message = message + row;
    console.log("========  end of the iteration ======== " );
}
// console.log(message);
alert(" This are all the users main info: \n" + message);

// Prompt for the user id //
const userResponse = 2;
// const userResponse = prompt("Who's list do you want to have a look at?\n For avoiding any erros we'll kindly ask you to use an numeric ID"); 
const userIdResponse = parseInt(userResponse);

// Display the user ID // confirm("Is this the user you've been looking for? ", ??userResponse??  )
let username = "";
for ( let i = 0; i < users.length; i++) {
    const user = users[i].username;
    if (userResponse == users[i].id){
    username = users[i].username; 
    username = ` ${username} \n`;
    } else if ( userResponse > 9 ) { 
        username = `${"The selected user id is not valid"}\n ${"Please try a diffrent user ID"}\n`;
    }
}
console.log("username is: " , username);
console.log("username: ", username.username);
console.log("address: ", username.address);

let userToDos = "";

for (let i = 0; i < todos.length; i++) {
//   const todo = todos[i].userResponse;
  const todo = todos[i].title;
  if (userResponse == todos[i].userId) {
    userToDos = `${todo.title}\n`;
    userToDos = userToDos + todo;
  }
//  else if (userResponse > 9) { 
//     userToDos = `${ "             ¯\_(ツ)_/¯. " }`;
// }
}
// if (userResponse > 9) { 
//     userToDos = ` ${ " ¯\_(ツ)_/¯. " }`;
//     console.log(" user todos:", userToDos);
// }
// const fullToDo = username + userToDos;
// console.log(username + userToDos);
// alert(fullToDo);
// alert(username);
console.log(userToDos);