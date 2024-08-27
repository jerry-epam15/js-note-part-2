//promise

//A “producing code” that does something and takes time. 
//A promise is a special JavaScript object that 
//links the “producing code” and the “consuming code” together.

//The constructor syntax for a promise object is:

let promise = new Promise(function (resolve, reject) {
    // executor (the producing code, "singer")
});



// The function passed to new Promise is called the executor. 
// When new Promise is created, the executor runs automatically. 
// It contains the producing code which should eventually produce the result.

//Its arguments resolve and reject are callbacks provided 
//by JavaScript itself. Our code is only inside the executor.

// When the executor obtains the result, be it soon or late, doesn’t matter, 
// it should call one of these callbacks:

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.



//So to summarize: the executor runs automatically and attempts to perform a job. 
//When it is finished with the attempt, it calls resolve if it was successful or 
//reject if there was an error.

// The promise object returned by the new Promise constructor has these internal properties:

// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.
// So the executor eventually moves promise to one of these states:



//Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });

//   We can see two things by running the code above:

//   The executor is called automatically and immediately (by new Promise).
  
//   The executor receives two arguments: resolve and reject. These functions are 
//   pre-defined by the JavaScript engine, so we don’t need to create them. We should 
//   only call one of them when ready.
  
//   After one second of “processing”, the executor calls resolve("done") to produce 
//   the result. This changes the state of the promise object:


// And now an example of the executor rejecting the promise with an error:

let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// The call to reject(...) moves the promise object to "rejected" state:



// The executor should call only one resolve or one reject. Any state change is final.

// All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
// The idea is that a job done by the executor may have only one result or an error.


//Consumers: then, catch

// A Promise object serves as a link between the executor (the “producing code” or “singer”) 
// and the consuming functions (the “fans”), which will receive the result or error. 
// Consuming functions can be registered (subscribed) using the methods .then and .catch.


//then 

// then
// The most important, fundamental one is .then.

// The syntax is:

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);


// The first argument of .then is a function that runs when the promise is resolved and receives the result.

// The second argument of .then is a function that runs when the promise is rejected and receives the error.

// For instance, here’s a reaction to a successfully resolved promise:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);


// The first function was executed.

// And in the case of a rejection, the second one:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);


// If we’re interested only in successful completions, then we can provide only one function argument to .then:

let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // shows "done!" after 1 second


//catch

//If we’re interested only in errors, then we can use null as the first argument: 
//.then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction),
//which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second



//Cleanup: finally

// Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

// The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.

// The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

// The code may look like this:

new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve or maybe reject */
})
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => stop loading indicator)
    // so the loading indicator is always stopped before we go on
    .then(result => show result, err => show error)



// There are important differences:

// A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.
    
// Please take a look at the example above: as you can see, the finally handler 
//has no arguments, and the promise outcome is handled by the next handler.
    
// A finally handler “passes through” the result or error to the next suitable handler.
    
// For instance, here the result is passed through finally to then:
    
new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Promise ready")) // triggers first
    .then(result => alert(result)); // <-- .then shows "value"


//And here’s an example of an error, for us to see how it’s passed through finally to catch:

new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Promise ready")) // triggers first
    .catch(err => alert(err));  // <-- .catch shows the error
// A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.
    
// The only exception to this rule is when a finally handler throws an error. Then this error 
// goes to the next handler, instead of any previous outcome.


//Example: loadScript

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }

// The new function loadScript will not require a callback. 
// Instead, it will create and return a Promise object that 
// resolves when the loading is complete. The outer code can 
// add handlers (subscribing functions) to it using .then:

function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }


//Usage:

  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
  
  promise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
  );
  
  promise.then(script => alert('Another handler...'));




