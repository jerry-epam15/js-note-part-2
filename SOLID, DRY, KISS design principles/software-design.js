//SOFTWARE DESIGN PRINCIPLE 

//Software design principles are foundational guidelines or best practices 
//used to manage the complexity of software development projects and improve 
//the quality and maintainability of software systems. These principles help 
//software developers make informed decisions, avoid common pitfalls, and create 
//systems that are adaptable to change. Here are some of the key software design principles:


//1. SOLID Principles

//A set of principles designed for object-oriented programming, 
//but applicable to other development paradigms as well, aiming to make 
//software designs more understandable, flexible, and maintainable:

//      Single Responsibility Principle (SRP): Each software module or class 
        //should have only one specific task or responsibility.

        //A class should have one, and only one, reason to change.

        class User {
            constructor(name, email) {
                this.name = name;
                this.email = email;
            }
        
            updateEmail(newEmail) {
                this.email = newEmail;
            }
        }
        
        class UserAuth {
            static login(email, password) {
                // Login logic here
                console.log('User logged in:', email);
            }
        
            static logout(user) {
                // Logout logic here
                console.log('User logged out:', user.email);
            }
        }

        //Here, User manages user data, and UserAuth handles authentication concerns.



//      Open/Closed Principle (OCP): Software components should be open for extension 
        //but closed for modification.

        //Software entities should be open for extension, but closed for modification.

        class User {
            constructor(name, email) {
                this.name = name;
                this.email = email;
            }
        
            updateEmail(newEmail) {
                this.email = newEmail;
            }
        }
        
        // Extends User for Admin roles, open for extension
        class AdminUser extends User {
            constructor(name, email) {
                super(name, email);
                this.admin = true;
            }
        
            updateUserRole(user, newRole) {
                console.log(`Updating ${user.name}'s role to ${newRole}`);
            }
        }



//      Liskov Substitution Principle (LSP): Objects in a program should be replaceable 
        //with instances of their subtypes without altering the correctness of the program.

        //Objects of a superclass shall be replaceable with objects of its subclasses without affecting the application.


        function printUserInfo(user) {
            console.log(`User Info: Name = ${user.name}, Email = ${user.email}`);
        }
        
        let user = new User('John Doe', 'john@example.com');
        let admin = new AdminUser('Jane Doe', 'jane@example.com');
        
        printUserInfo(user);  // Works with User object
        printUserInfo(admin); // Works with AdminUser object, which is a subclass of User



//      Interface Segregation Principle (ISP): Larger interfaces should be split into smaller, 
        //more specific ones so that implementing classes only need to be concerned about the methods 
        //that are of interest to them.

        //Clients should not be forced to depend upon interfaces that they do not use.


        // Instead of having a monolithic user class, separate operations into smaller classes/interfaces.


class UserUpdater {
    updateEmail(user, newEmail) {
        user.email = newEmail;
        console.log('Email updated to:', newEmail);
    }
}

class UserAuthenticator {
    authenticate(userId) {
        console.log('User authenticated with ID:', userId);
    }
}
        

//      Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. 
        //Both should depend on abstractions (e.g., interfaces).

        //High-level modules should not depend on low-level modules. Both should depend on abstractions.


        class EmailService {
            send(email) {
                console.log('Sending email to', email);
            }
        }
        
        class User {
            constructor(name, email, emailService) {
                this.name = name;
                this.email = email;
                this.emailService = emailService; // Dependency injection
            }
        
            updateEmail(newEmail) {
                this.email = newEmail;
                this.emailService.send(newEmail); // High-level modules depending on abstractions rather than details.
            }
        }
        
        const emailService = new EmailService();
        const user = new User('John Doe', 'john@example.com', emailService);
        user.updateEmail('newjohn@example.com');




//2. DRY (Don't Repeat Yourself)

//Aims to reduce the repetition of code patterns. DRY encourages the consolidation of code 
//that is repeated across multiple parts of an application into a single place, which promotes 
//easier maintenance and fewer bugs.


// DRY Principle Example
function square(x) {
    return x * x;
}

function calculateArea(radius) {
    return Math.PI * square(radius);
}



// Scenario: Calculating Discounts on Products
// Let's say we have an application that needs to calculate discounts on different types of products. 
// Rather than repeating the discount logic everywhere it's needed, we encapsulate it in a function to 
// promote reusability and easier maintenance.


//Without Applying DRY
//In this non-DRY approach, the discount logic is repeated directly within each product 
//processing function


function processDesktopOrder(price) {
    let discount = price * 0.1;  // 10% discount
    let discountedPrice = price - discount;
    console.log(`The final price of the desktop is ${discountedPrice}`);
}

function processLaptopOrder(price) {
    let discount = price * 0.1;  // 10% discount
    let discountedPrice = price - discount;
    console.log(`The final price of the laptop is ${discountedPrice}`);
}


// Applying DRY
// Here's how you could refactor the above code to adhere to the DRY principle, with a 
// specific function to handle the discount calculation:


function calculateDiscount(price, discountRate) {
    return price * discountRate;
}

function processDesktopOrder(price) {
    let discount = calculateDiscount(price, 0.1); // 10% discount
    let discountedPrice = price - discount;
    console.log(`The final price of the desktop is ${discountedPrice}`);
}

function processLaptopOrder(price) {
    let discount = calculateDiscount(price, 0.1); // 10% discount
    let discountedPrice = price - discount;
    console.log(`The final price of the laptop is ${discountedPrice}`);
}



// Benefits of Applying DRY

// Reduced Redundancy: Changes to discount logic only need to be made in one place.

// Increased Maintainability: Fewer bugs and issues arise from having multiple places to update.

// Improved Readability: Cleaner and more organized code that tells you where to look for 
// specific functionalities.




//3. KISS (Keep It Simple, Stupid)

// Advocates for simplicity in design. Complexity should be avoided, as more complex systems 
// are harder to understand and maintain. Simplicity also facilitates easier and more reliable 
// integration of different parts of a system.




// Scenario: Adding Numbers in an Array

// Without Applying 

// In this non-KISS example, let's create a function to add numbers in an array, 
// but instead of keeping it straightforward, we incorporate unnecessary complexity by
// using additional data structures or overly-complex functions:


function complexSum(numbers) {
    let sum = 0;
    numbers.forEach(function(num, index) {
        // Prepare a detailed log message for debugging (which might not be necessary most of the time)
        console.log(`Adding ${num} to sum at index ${index}`);
        sum += num;
    });
    console.log(`Final sum: ${sum}`);
    return sum;
}

const array = [1, 2, 3];
console.log('Complex Sum:', complexSum(array));


// Applying KISS
// Now, let's simplify the function ignoring the irrelevant complexities:


function simpleSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const array = [1, 2, 3];
console.log('Simple Sum:', simpleSum(array));



// Benefits of Applying KISS

// Ease of Understanding: New developers, or anyone reviewing the code, can easily grasp what the 
// function does without parsing through unnecessary information.

// Improved Maintainability: Fewer lines of code and less complexity mean lower chances for bugs 
// and easier modifications.

// Efficient Execution: Avoiding unnecessary operations results in faster execution and less 
// resource utilization.





// 4. YAGNI (You Aren't Going to Need It)

// A reminder to developers not to add functionality until it is necessary. Often developers waste 
// time writing code that is never used. By following YAGNI, you can avoid wasting time on features 
// that may not be needed, keeping the focus on delivering actual value.



// Scenario: Developing a Weather Application Dashboard

// Without Applying YAGNI

// Suppose you're tasked to create a weather dashboard where, initially, the requirement is only 
// to display the current temperature in one city.

// Without applying YAGNI, you might be tempted to add future-predicted features like multi-city 
// support, historical weather data, advanced graphical representations of the weather forecast, 
// and more:


function fetchWeather(city) {
    console.log(`Fetching weather for ${city}`);
}

function displayCurrentTemperature(weatherData) {
    console.log(`Current temperature is ${weatherData.temp}`);
}

function displayHistoricalData(weatherData) {
    // Not currently required
    console.log(`Displaying historical data...`);
}

function supportMultipleCities(cities) {
    // Not currently required
    cities.forEach(city => fetchWeather(city));
}

// Usage, over-engineering with unused features
fetchWeather('New York');
displayCurrentTemperature({ temp: '15°C' });
displayHistoricalData({}); // YAGNI violation: functionality not required yet
supportMultipleCities(['New York', 'London', 'Tokyo']); // YAGNI violation


// Applying YAGNI
// Let's strip the implementation down to what's actually required at present:



function fetchWeather(city) {
    console.log(`Fetching weather for ${city}`);
}

function displayCurrentTemperature(weatherData) {
    console.log(`Current temperature is ${weatherData.temp}`);
}

// Usage that sticks to the current requirements
fetchWeather('New York');
displayCurrentTemperature({ temp: '15°C' });



// Benefits of Applying YAGNI

// Minimize Waste: Saves time and effort by not developing features that are not needed.

// Simpler Code: Results in a codebase that is easier to maintain because there are fewer 
// lines of code and less complexity.

// Improved Focus: Keeps the team focused on delivering value that the users can see and use, 
// rather than speculative features.



// 5. Law of Demeter (LoD) or Principle of Least Knowledge

// Promotes loose coupling in software architectures, specifying a limited interaction 
// between components to reduce dependencies on internal details of other components, 
// leading to a more maintainable system.


// Scenario: Managing Customer Orders

// Consider a scenario where you're dealing with a customer order system in an 
// e-commerce context. You have objects representing a Customer, Order, and OrderDetail.

// Without Applying the Law of Demeter
// Here, we demonstrate a situation where the code violates the 
// Law of Demeter by having excessive chain calls that traverse 
// through object relationships.


class Customer {
    constructor(name) {
        this.name = name;
        this.order = new Order();
    }
}

class Order {
    constructor() {
        this.orderDetail = new OrderDetail();
    }

    getOrderDetail() {
        return this.orderDetail;
    }
}

class OrderDetail {
    getPrice() {
        return 99.99; // Assuming the price is fixed for simplification
    }
}

// Client code that violates the Law of Demeter
const customer = new Customer('John Doe');
const price = customer.order.getOrderDetail().getPrice();
console.log(`Price is: ${price}`);


// In this code:

// Chain calls like customer.order.getOrderDetail().getPrice() violate the Law of Demeter 
// by "reaching through" objects to access other methods.


// Applying the Law of Demeter

// To comply with the Law of Demeter, you can refactor the code so that each part interacts only 
// with its immediate "friends."


class Customer {
    constructor(name) {
        this.name = name;
        this.order = new Order();
    }

    getOrderPrice() {
        return this.order.getPrice();
    }
}

class Order {
    constructor() {
        this.orderDetail = new OrderDetail();
    }

    getPrice() {
        return this.orderDetail.getPrice();
    }
}

class OrderDetail {
    getPrice() {
        return 99.99; // Price of the order detail
    }
}

// Client code that adheres to the Law of Demeter
const customer = new Customer('John Doe');
const price = customer.getOrderPrice();
console.log(`Price is: ${price}`);


// In the refactored example:

// Customer class adds a method getOrderPrice() rather than allowing direct 
// access to Order and OrderDetail objects.
// Each object only interacts with its immediate child objects, not deeper. 
// This approach encapsulates the navigational logic within each class.



// Benefits of Applying the Law of Demeter

// Reduced Dependencies: Objects are less dependent on the internal structures of other objects, 
// leading to better encapsulated code.

// Increased Maintainability: Changes in one part of the system are less likely to require 
// changes in related parts.

// Easier Testing and Debugging: With fewer direct dependencies, it's easier to mock 
// relationships and isolate problems.





// 6. Separation of Concerns (SoC)

// Encourages the separation of a computer program into distinct sections, where each section 
// addresses a separate concern, a term that refers to a particular set of information that 
// affects a specific aspect of a software program.



// 7. Coupling and Cohesion

// Low Coupling: The degree to which a component or class is independent from others should 
// be maximized to reduce dependencies.

// High Cohesion: Elements within a module or class should be closely related and 
// perform a set of related activities, leading to clearer organization of code and easier maintenance.


