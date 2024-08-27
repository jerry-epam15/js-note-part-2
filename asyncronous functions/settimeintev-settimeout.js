//Scheduling: setTimeout and setInterval


// There are two methods for it:

// 1.setTimeout allows us to run a function once after the interval of time.
// 2.setInterval allows us to run a function repeatedly, starting after the 
// interval of time, then repeating continuously at that interval.


//SETTIMEOUT

// The syntax:

let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
Parameters:

// func|code
// Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.
// delay
// The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
// arg1, arg2…
// Arguments for the function


//For instance, this code calls sayHi() after one second:

function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);


//With arguments:

function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John




//If the first argument is a string, then JavaScript creates a function from it.

So, this will also work:

setTimeout("alert('Hello')", 1000);

//But using strings is not recommended, use arrow functions instead of them, like this:

setTimeout(() => alert('Hello'), 1000);




//Canceling with clearTimeout

// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// The syntax to cancel:

let timerId = setTimeout(...);
clearTimeout(timerId);


//In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);//it prevent from print by cancelling timeout message 
alert(timerId); // same identifier (doesn't become null after canceling)
// As we can see from alert output, in a browser the timer identifier is a number. 
//In other environments, this can be something else. For instance, 
//Node.js returns a timer object with additional methods.

// Again, there is no universal specification for these methods, so that’s fine.




//setInterval

// The setInterval method has the same syntax as setTimeout:

let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)




// All arguments have the same meaning. But unlike setTimeout it runs 
// the function not only once, but regularly after the given interval of time.

// To stop further calls, we should call clearInterval(timerId).

// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// repeat with the interval of 2 seconds

let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//----------------



//Nested setTimeout




There are two ways of running something regularly.

One is setInterval. The other one is a nested setTimeout, like this:

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);



//using the set timeout how the set time interval works here the there is clearinterval

// The setTimeout above schedules the next call right at the end of the current one (*).

// The nested setTimeout is a more flexible method than setInterval. This way the next call 
// may be scheduled differently, depending on the results of the current one.

// For instance, we need to write a service that sends a request to the server every 5 
// seconds asking for data, but in case the server is overloaded, it should increase the interval 
// to 10, 20, 40 seconds…


Here’s the pseudocode:

let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);



// And if the functions that we’re scheduling are CPU-hungry, 
// then we can measure the time taken by the execution and plan the next call sooner or later.

// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.



// so the nested timeout work like setinterval and can manage the time 

//---------

//Zero delay setTimeout



//There’s a special use case: setTimeout(func, 0), or just setTimeout(func).

//This schedules the execution of func as soon as possible.
//But the scheduler will invoke it only after the currently executing script is complete.

//So the function is scheduled to run “right after” the current script.

//For instance, this outputs “Hello”, then immediately “World”:

setTimeout(() => alert("World"));

alert("Hello");

//without time interval







