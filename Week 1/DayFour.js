function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }
// Basic function layout

function timesTable (no1, no2) {
    return no1 * no2
}
console.log(timesTable(5,6))

const takeOrder = (size, drinkType) => {
    console.log(`Order recieved: ${size}, ${drinkType}`)
}
takeOrder("Grande", "Americano")

let light = true

function lightPower () {
    if (light) {
        console.log("Lights off")
        light = false
    }  else {
        console.log("Lights on")
        light = true
    }
    
}
console.log(lightPower())
console.log(lightPower())


const person = {
    firstName: "Brandon",
    lastName: "Horne",
    id: "6942",
    age: "18",
    canDrive: false,
    morning: "Asleep",
    afternoon: "Awake",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(person.fullName())
let time = new Date()

if (time.getHours() < 12) {
    console.log(person.morning)
} else if (time.getHours() > 12) {
    console.log(person.afternoon)
} else {
    console.log("Waking up period")
}

const cafe = {
    name: "Conak Cafe",
    noOfTables: 5,
    hasDiscount: false,
    drinks: ["Sprite Cranberry", "Cheese wizz", "Sprite"]
}

cafe.drinks.push("Hot Sprite")

function sayHi (birthName) {
    return (`Hello, my name is ${birthName}.`)
}
console.log(sayHi("Brandon"))


const pet = {
    animalName: "John",
    typeOfPet: "poodle",
    yearsOld: "5",
    colour: "white",
    food: "beef chunks",
    drink: "water",
    diet: function() {
        return "The pet " + this.typeOfPet + " has a diet of " + this.food + " and " + this.drink
    }
}
console.log (pet.diet())
  