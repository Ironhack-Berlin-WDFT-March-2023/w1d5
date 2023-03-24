// Object-oriented programming
// Objects can have properties and methods
// With the keyword "this" you can access the properties and methods of an object

// We will create a simple Monopoly game

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10]

let dice

let player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000
}

let player2 = {
    name: 'Mostafa',
    color: 'black',
    position: 0,
    cash: 1000
}

// (1) We could now play the game like this, this would be the simplest approach
// Problem: We have to duplicate the code over and over again
dice = 1 + Math.floor(6 * Math.random())
player1.position = (player1.position + dice) % squares.length
player1.cash += squares[player1.position]
if (player1.cash < 0) {
    console.log(`Game over for ${player1.name}.`)
}

// Display info
console.log(player1)

// Repeat for player 2

// -------------------------------------------------------------

// (2) Therefore it's better to add methods to our player-objects

player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000,
    move() {
        // The dice is a random integer between 1 and 6
        let dice = 1 + Math.floor(6 * Math.random())
        // The position is always between 0 and 15 (the numbers of squares - 1)
        this.position = (this.position + dice) % squares.length
        // The cash is updated based on the values of squares and player1.position
        this.cash += squares[this.position]
        // If the player doesn't have anymore cash, player is out of game
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    },
    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`)
    }
}

player2 = {
    name: 'Maxence',
    color: 'blue',
    position: 0,
    cash: 1000,
    move() {
        // The dice is a random integer between 1 and 6
        dice = 1 + Math.floor(6 * Math.random())
        // The position is always between 0 and 15 (the numbers of squares - 1)
        this.position = (this.position + dice) % squares.length
        // The cash is updated based on the values of squares and player1.position
        this.cash += squares[this.position]
        // If the player doesn't have anymore cash, player is out of game
        if (this.cash < 0) {
        console.log(`Game over for ${this.name}.`)
        }
    },
    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`)
    }
}

// Now we only need to call the methods of the objects

player1.move()
player1.move()
player2.move()
player2.move()
player1.displayInfo()
player2.displayInfo()

// The only problem left is: If we want to have multiple player, we have to repeat the code

// -------------------------------------------------------------

// (3) To solve this problem we will use a class
// A class is like a blueprint for an object and with a class you can generate multiple objects

class Player {
    // The constructor is the method triggered with the `new` keyword
    constructor(name, color) {
        this.name = name
        this.color = color
        this.position = 0
        this.cash = 1000
    }
   
    move() {
        // The dice is a random integer between 1 and 6
        let dice = 1 + Math.floor(6 * Math.random())
        // The position is always between 0 and 15 (the numbers of squares - 1)
        this.position = (this.position + dice) % squares.length
        // The cash is updated based on the values of squares and player1.position
        this.cash += squares[this.position]
        // If the player doesn't have anymore cash, player is out of game
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`)
        }
    }
   
    displayInfo() {
        console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`)
    }
}

// Now we can create multiple objects out of the player class

const player3 = new Player("Joaquim", "red")
const player4 = new Player("Maxence", "blue")
console.log(player3)
console.log(player4)

for (let i = 0; i < 10; i++) {
    player3.move()
    player4.move()
}

player3.displayInfo()
player4.displayInfo()

// Now the code is much cleaner and shorter! :D
