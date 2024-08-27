//Promise API
//There are 6 static methods in the Promise class. We’ll quickly cover their use cases here.

// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any
// Promise.resolve/reject


// That’s what Promise.all is for.

// The syntax is:

let promise = Promise.all(iterable);
// Promise.all takes an iterable (usually, an array of promises) and returns a new promise.

// The new promise resolves when all listed promises are 
//resolved, and the array of their results becomes its result.


Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

// A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all.

// For instance, if we have an array of URLs, we can fetch them all like this:

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));


//A bigger example with fetching user information for an array of GitHub users by their names (we could fetch an array of goods by their ids, the logic is identical):

let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        // all responses are resolved successfully
        for (let response of responses) {
            alert(`${response.url}: ${response.status}`); // shows 200 for every url
        }

        return responses;
    })
    // map array of responses into an array of response.json() to read their content
    .then(responses => Promise.all(responses.map(r => r.json())))
    // all JSON answers are parsed: "users" is the array of them
    .then(users => users.forEach(user => alert(user.name)));

// If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.

// For instance:
    
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!
// Here the second promise rejects in two seconds. That leads to an immediate rejection of 
// Promise.all, so .catch executes: the rejection error becomes the outcome of the entire Promise.all.


//------------
//Promise.allSettled

// Promise.all rejects as a whole if any promise rejects. 
// That’s good for “all or nothing” cases, when we need all results successful to proceed:


// For example, we’d like to fetch the information about multiple users. 
// Even if one request fails, we’re still interested in the others.

// Let’s use Promise.allSettled:

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                alert(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                alert(`${urls[num]}: ${result.reason}`);
            }
        });
    });


//-------------

//promiserace

// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

// The syntax is:

// let promise = Promise.race(iterable);
// For instance, here the result will be 1:

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1



//Promise.any

// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. 
// If all of the given promises are rejected, then the returned promise is rejected 
// with AggregateError – a special error object that stores all promise errors in its errors property.

// The syntax is:

let promise = Promise.any(iterable);
//For instance, here the result will be 1:

Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1


//Promise.resolve/reject

Promise.resolve
Promise.resolve(value) creates a resolved promise with the result value.

Same as:

let promise = new Promise(resolve => resolve(value));
// The method is used for compatibility, when a function is expected to return a promise.

// For example, the loadCached function below fetches a URL and remembers 
// (caches) its content. For future calls with the same URL it immediately 
// gets the previous content from cache, but uses Promise.resolve to make a
//  promise of it, so the returned value is always a promise:

let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}


// Promise.reject
// Promise.reject(error) creates a rejected promise with error.

Same as:

let promise = new Promise((resolve, reject) => reject(error));



