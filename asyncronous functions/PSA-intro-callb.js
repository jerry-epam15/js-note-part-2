//callback intro


// A callback function is a function that is passed into another function as an argument and 
// is intended to be executed after some kind of event or operation. Callback functions are 
// widely used in JavaScript, especially for handling asynchronous operations such as interactions 
// with a web server, timers, event handling, or any operations that require waiting for 
// something to complete before proceeding.

//To demonstrate the use of callbacks, 
// promises and other abstract concepts, we’ll be using some 
// browser methods: specifically, loading scripts and performing simple document manipulations.

// Many functions are provided by JavaScript host environments that allow you to 
// schedule asynchronous actions. In other words, actions that we initiate now, but they finish later.


// For instance, one such function is the setTimeout function.

// There are other real-world examples of asynchronous actions, e.g. loading scripts and modules


//Take a look at the function loadScript(src), that loads a script with the given src:

function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

// It inserts into the document a new, dynamically created, 
// tag <script src="…"> with the given src. The browser automatically starts loading 
// it and executes when complete.

// We can use this function like this:


// / load and execute the script at the given path
loadScript('/my/script.js');


// The script is executed “asynchronously”, as it starts loading now, but runs later, 
//when the function has already finished.

// If there’s any code below loadScript(…), it doesn’t wait until the script loading finishes.

loadScript('/my/script.js');
// the code below loadScript
// doesn't wait for the script loading to finish
// ...



// Let’s say we need to use the new script as soon as it loads. It declares new functions, 
//and we want to run them.

// But if we do that immediately after the loadScript(…) call, that wouldn’t work:

loadScript('/my/script.js'); // the script has "function newFunction() {…}"

newFunction(); // no such function!



//Let’s add a callback function as a second argument to loadScript that 
//should execute when the script loads:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

//The onload event is described in the article Resource loading: 
//onload and onerror, it basically executes a function after the script is loaded and executed.


//Now if we want to call new functions from the script, we should write that in the callback:

loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction(); // so now it works
  ...
});




//Here’s a runnable example with a real script:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});



// That’s called a “callback-based” style of asynchronous programming. 
// A function that does something asynchronously should provide a callback 
// argument where we put the function to run after it’s complete.


//Callback in callback

//How can we load two scripts sequentially: the first one, and then the second one after it?

//The natural solution would be to put the second loadScript call inside the callback, like this:

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});

// After the outer loadScript is complete, the callback initiates the inner one.

// What if we want one more script…?

loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });

  });

});

//----------------

//Handling errors

//Here’s an improved version of loadScript that tracks loading errors:

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}




// It calls callback(null, script) for successful load and callback(error) otherwise.

// The usage:

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});
// Once again, the recipe that we used for loadScript is actually quite common. 
//It’s called the “error-first callback” style.

// The convention is:

// The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.
// The second argument (and the next ones if needed) are for the successful result. Then callback(null, result1, result2…) is called.
// So the single callback function is used both for reporting errors and passing back results.


//---------------------

//Pyramid of Doom

//for multiple asynchronous actions that follow one after another, we’ll have code like this:

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});

