set timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier 
clearTimeout(timerId); 
alert(timerId); // same identifier

//why doesnt settimeout print even if we put the timedelay to 0

// Even when specifying a delay time of 0 milliseconds in the setTimeout function, 
// your callback function does not execute immediately. This happens because setTimeout 
// schedules the callback function to run at the next opportunity, not during the 
// current flow of execution.


//JavaScript Event Loop and Execution Model

//JavaScript is a single-threaded environment, meaning it can only execute one piece of 
//code at a time. It relies on an event loop and a task queue system to manage execution. 
//Here's a simplified explanation on why a setTimeout with a delay of 0 doesn't execute 


// Task Queue: JavaScript has a task queue (or multiple queues in modern browsers) that hold tasks 
// scheduled to run after the current execution context. When you use setTimeout with 0 milliseconds, 
// you're essentially telling JavaScript to execute the callback function at the next possible tick 
// of the event loop, after all currently executing scripts complete.


//Web APIs and Browser Behavior: The exact behavior can slightly vary across different 
//browsers due to how they implement their task queues and manage execution timings. 
//There’s also a minimum delay enforced by many browsers on setTimeout which might be 
//more than 0 milliseconds (commonly around 4ms if many timeouts are set). This helps 
//prevent issues like CPU hogging from overly tight loops of timeouts.


