// Description
// This is the first try at a common program built by new developers, the todo list.
//You'll have to use everything we've covered so far in JS to tackle this challenge

// Instructions
// - Use this starting template, you'll find two objects with data for you to
//use => https://codesandbox.io/s/todo-lists-tr122?from-embed=&file=/index.js
// - Do not code your solution in CodeSandbox
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user

// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the
//option to repeatedly choose a different user, or to finish the program

// ==================== //

/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);


// let message = " "; 

// for (i = 0; i < users.length; i++ ) { 
//     console.log("Start of Iteration # ", i + 1 );
//     // console.log("Index positon # ", i );
//     const id = users[i].id;
//     const name = users[i].name;
//     const city = users[i].address.city;
//     // console.log ("this is the selected user: ", "\n" , user.id, "\n" , user.name, "\n" , user.address.city);
//     // maybe to add smth like : id |   name    |   city\n for the users when they get dispplayed! 
//     const row = ` ${id} | ${name} | ${city}\n`;

//     message = message + row;

//     console.log("========  end of the iteration ======== " );

// }
// console.log(message);
// alert(message);


// Prompt for the user id //

// const userID = prompt("Who's list do you want to have a look at?\n For avoiding any erros we'll kindly ask you to use an ID"); 

console.log(userID);


// Display the user ID //

// confirm("Is this the user you've been looking for? ", ??userID??  )


// for (i = 0; i < todos/lenght; i++ ) { 
//     console.log("Start of Iteration # ", i + 1 );
//     // console.log("Index positon # ", i );
//     const id = users[i].id;
//     const name = users[i].name;
//     const city = users[i].address.city;
//     // console.log ("this is the selected user: ", "\n" , user.id, "\n" , user.name, "\n" , user.address.city);
//     // maybe to add smth like : id |   name    |   city\n for the users when they get dispplayed! 
//     const row = ` ${id} | ${name} | ${city}\n`;

//     message = message + row;

//     console.log("========  end of the iteration ======== " );

// }

// steven version // 


// let positionOfMyLastName = null;

// // Use a for loop

// for (let i = 0; i < sortedLastNames.length; i++) {
//   const lastNameToCheck = sortedLastNames[i];
//   // console.log("Iteration #", i + 1);
//   // console.log("lastNameToCheck: ", lastNameToCheck);
//   // console.log("index (what we need): ", i);
//   // console.log("sortedLastNames: ", sortedLastNames);
//   // console.log("positionOfMyLastName Loop: ", i);
//   if (lastNameToCheck === "Rico") {
//     positionOfMyLastName = i;

//     // console.log("positionOfMyLastName inside IF: ", positionOfMyLastName);
//   }
// }

// console.log("positionOfMyLastName: ", positionOfMyLastName);
