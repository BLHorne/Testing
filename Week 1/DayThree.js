let coffee = ["Brandon - Flat White","Phil - Americano","Alex - Black Coffee"]
console.log(coffee)
coffee[0] = "Brandon - Banana Latte"
coffee.push("Micheal - Expresso")
console.log(coffee)
console.log(coffee.length)

let colours = ["Blue", "Red", "Orange", "Purple", "Indigo", "Green", "Yellow"]
let text = ""
for (let i = 0; i < colours.length ; i++) { // i++ adds 1 to i per loop
    console.log(colours[i] + "\n")
}

let bSongs = ["Thunderstruck - ACDC","We Are The Champions - Queen","Feel Good Inc - Gorillaz"]
console.log (bSongs)
bSongs.push("Thriller - Micheal Jackson","Cant Stop Me - Queen")
bSongs.splice(1, 1, "Back In Black - ACDC")
bSongs.pop()
console.log(bSongs)

let age = 14
while(age < 18) {
    console.log("you are a child!")
    age++
}
console.log("you have reach adulthood!")

let cards = ["diamond","spade","heart","club"]
let currentCard = "club"
while (currentCard != "spade") {
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)

