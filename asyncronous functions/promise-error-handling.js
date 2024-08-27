//Error handling with promises

//For instance, in the code below the URL to fetch is wrong (no such site) and .catch handles the error:

fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)

// As you can see, the .catch doesn’t have to be immediate. It may appear after one or maybe several .then.

// Or, maybe, everything is all right with the site, but the response is not valid JSON. 
// The easiest way to catch all errors is to append .catch to the end of chain:
  
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));


// The "invisible try..catch" around the executor automatically catches the error and turns it 
// into rejected promise.

// This happens not only in the executor function, but in its handlers as well. If we throw 
// inside a .then handler, that means a rejected promise, so the control 
// jumps to the nearest error handler.
    
// Here’s an example:
    
new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!

// This happens for all errors, not just those caused by the throw statement. 
// For example, a programming error:
    
new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined
//The final .catch not only catches explicit rejections, 
//but also accidental errors in the handlers above.

//--------------more to look

  