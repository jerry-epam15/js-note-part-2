//Static properties and methods

// We can also assign a method to the class as a whole. Such methods are called static.

// In a class declaration, they are prepended by static keyword, like this:


class User {
    static staticMethod() {
      alert(this === User);
    }
  }
  
  User.staticMethod(); // true



//That actually does the same as assigning it as a property directly:

class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true




class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }
  
  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  alert( articles[0].title ); // CSS





  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date());
    }
  }
  
  let article = Article.createTodays();
  
  alert( article.title ); // Today's digest





//Static properties


class Article {
    static publisher = "Ilya Kantor";
  }
  
  alert( Article.publisher ); // Ilya Kantor



//Inheritance of static properties and methods

// Static properties and methods are inherited.

// For instance, Animal.compare and Animal.planet in the code below are inherited and accessible 
// as Rabbit.compare and Rabbit.planet:



class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
  rabbits.sort(Rabbit.compare);
  
  rabbits[0].run(); // Black Rabbit runs with speed 5.
  
  alert(Rabbit.planet); // Earth



//   So, Rabbit extends Animal creates two [[Prototype]] references:

//   Rabbit function prototypally inherits from Animal function.
//   Rabbit.prototype prototypally inherits from Animal.prototype.
//   As a result, inheritance works both for regular and static methods.


