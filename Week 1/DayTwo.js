// var Eigth = ("All around the world"); // Use ; after lines of code
// console.log(Eigth.charAt(7).toUpperCase());


// Variable options Const(Constant), Let(Changable), Var(Not used) (Variable type)___(Variable name) = (Variable Value) Equals can be changed for different types of assignment
// +, -, *, **(Exponentiation), /, %(remainder), ++(Increment), --(Decrement) All options instead of = Can combine e.g. =+ pre determined value add the new value

let i = 10
console.log(i)
i += 2
console.log(i)
// Variable names use camelCase all words starting after first have capitalized first letter e.g. lettersAreGreat

let favouriteDrink = "coffee"
console.log("My favourite drink is " + favouriteDrink) // adding to strings together make sure to use a space within string so they dont merge
console.log(`My favourite drink is ${favouriteDrink}`) // Asthetic version use back tick instead of quotes, cleans up process for longer sentences

console.log("ACTIVITY 1")
let fullName = "Brandon Horne"
let age = "18"
let favouriteColour = "aqua"
console.log(`Hello! My name is ${fullName} I am ${age} years old and my favourite colour is ${favouriteColour}`)

console.log("ACTIVITY 2")
let breakfast = "eggs and bacon"
let lunch = "toad in the hole"
let dinner = "chicken rice"
console.log(`I am going to have ${breakfast},${lunch} and ${dinner} today!`)
breakfast = "rice crispies"
console.log(`I have decided to have ${breakfast} for my first meal instead!`)

console.log("ACTIVITY 3 / 50% done")// gets the days till birthday for current year if date passed goes minus work on fix
const fullDay = 1000 * 60 * 60 * 24 // milliseconds in a day
let dateToday = new Date()
let birthday = new Date(dateToday.getFullYear(), 4, 8) // sets birthday variable as may 8th
if (dateToday.getMonth() >= 4 && birthday.getDay() > 8){
    (birthday = new Date(dateToday.getFullYear() +1)) // attempt to fix date problem not working
}
   
let result = Math.round(birthday.getTime() - dateToday.getTime()) / (fullDay)
console.log(`Number of days left till my birthday is ${result}`)

console.log("ACTIVITY 4")
let space1 = "x"
let space2 = "o"
let space3 = "x"
let space4 = "o"
let space5 = "x"
let space6 = "o"
let space7 = "x"
let space8 = "o"
let space9 = "x"
console.log(`   |   |   
 ${space1} | ${space2} | ${space3} 
   |   |   
-----------
   |   |
 ${space4} | ${space5} | ${space6} 
   |   |   
-----------
   |   |   
 ${space7} | ${space8} | ${space9} 
   |   |   `)


console.log("IF,ELSE,SWITCH STATEMENTS")

let yearsOld = 17
let country = "UK"
if (yearsOld <= 17) {
    console.log("You Aren't old enough.")
}
else if (yearsOld > 17 && country == "UK") { // Use of if statements as well as the AND command &&
    console.log("You may be served.")
}
else {
    console.log("You don't have an age?")
}



if (1 ==="1") {
    console.log("True")
}
else {
    console.log("False")
}

peopleNumbers = 150
tallPeopleNumbers = 10
if (peopleNumbers > 200 || tallPeopleNumbers > 5) { // Use of the OR command ||
    console.log("A good crowd")
}
else {
    console.log("Not that many people out today")
}

let county = "cheshire"
switch(county) {
    case "yorkshire":
        console.log("Now thats a pudding maker")
        break
    case "nottinghamshire":
        console.log("Lets get a bit more local")
        break
    case "cheshire":
        console.log("Now thats a perfect county")
        break
    case "chester":
        console.log("We don't talk about chester.")
        break
    default:
        console.log("I haven't heard of this county before")
}
