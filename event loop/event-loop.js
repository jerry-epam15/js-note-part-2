//The Event Loop is a fundamental concept in JavaScript and is key to understanding 
//how asynchronous code is executed. Despite JavaScript being single-threaded, the 
//event loop allows for handling of asynchronous events (such as mouse clicks, network 
//events, or timers) in a non-blocking manner.


//Components Involved in the Event Loop System:

//1.Call Stack: This is where the JavaScript engine keeps track of the functions 
//that are currently running. It's a LIFO (Last In, First Out) stack. When a 
//function is invoked, it is pushed onto the stack, and when a function returns 
//it is popped off the stack.


//2.Web APIs: These are provided by the browser (in browser environments) or by 
//the runtime environment (like Node.js). Web APIs can handle operations like 
//AJAX calls, timers, and event handlers, etc. These APIs are able to run 
//asynchronously and can return their results to the event loop for processing 
//once they complete their operation.



//3.Task Queue (or Callback Queue): When an asynchronous operation completes 
//and a callback is ready to be executed, it is moved to the task queue. If the 
//call stack is empty (i.e., there are no functions currently running), items 
//from the task queue are dequeued and pushed onto the call stack to be executed.

//4.Microtask Queue: This is used specifically for promises and other microtasks. 
//It has higher priority than the task queue, which means a microtask is always 
//executed before a callback in the task queue.

//5.Event Loop: The event loop is what coordinates the execution of scripts, 
//the handling of events, and the redrawing of the UI. Its fundamental role 
//is to check the call stack and determine if the call stack is empty. If 
//the call stack is empty, it looks first to the microtask queue, processing 
//all microtasks there before moving on to the task queue.





//How the Event Loop Works:

//Here's a step-by-step on what happens:

//1.Executing Script: Initially, the whole script is pushed onto the call stack 
//as a single main() function.


//2.Calling Web APIs: If during the execution of the script, it calls a Web API 
//(like setTimeout()), the API will start its work. The completion of this work 
//(like the timer running out) will result in the callback function associated 
//with the API being put into the appropriate queue (task or microtask queue).


//3.Checking Microtasks: Once the initial call stack (the main() function) clears, 
//the event loop begins its cycles. Each cycle, the event loop first checks the 
//microtask queue for any tasks. These tasks are typically related to promises. 
//The event loop will process all microtasks in the queue before moving on, even 
//if more microtasks are added to the queue as it processes.


//4.Processing Task Queue: After all microtasks are processed, if there are no 
//longer any microtasks, the event loop will take one callback from the task 
//queue and push it onto the call stack to be executed.


//5.Rendering: Browsers also handle rendering tasks. The rendering steps generally 
//occur after executing scripts and processing tasks/microtasks, but may be throttled 
//to typical screen refresh rates (e.g., 60 times a second).



