// Challenge: Write the methods getAge(), addJoke() and getRandomJoke()

const chuck = {
    firstName: "Chuck",
    lastName: "Norris",
    birthDate: new Date("1940-03-10"),
    jokes: [
        "Chuck Norris counted to infinity... twice."
    ],
    displayInfo() {
        console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`)
    },
    // TODO
    // Hint: to get the current time, you can do: new Date()
    // Hint: to get the birthDate, you can do: this.birthDate
    // Hint: you can subtract 2 dates and you get the number of milliseconds
    getAge() {
        console.log(Math.floor((new Date() - this.birthDate) / (1000 * 60 * 60 * 24 * 365)))
    },
    // TODO
    addJoke(joke) {
        this.jokes.push(joke)
    },
    // TODO
    getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * this.jokes.length)
        return this.jokes[randomIndex]
    }
}

// This should log 82
console.log(chuck.displayInfo())

console.log(chuck.getAge())

chuck.addJoke("Chuck Norris can divide by zero")
chuck.addJoke("Chuck Norris kills flies with his gun")

console.log(chuck.getRandomJoke())
console.log(chuck.getRandomJoke())

console.log(chuck.displayInfo())
