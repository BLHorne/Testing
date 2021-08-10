function revString (unRev) {
    return unRev.split("").reverse().join("") // splits string into an array, reverse reverses the order of the array and then join will rejoin the array into a string again
}
console.log(revString("Micheal"))

function dataChecker (string, rank) {
    if (string = "code nation" && rank == 1) {
        console.log("Access Allowed rank 1 of code nation")
    } else if (string === "code nation" && rank != 1) {
        console.log("You're not rank 1 however you are code nation")
    } else {
        console.log("You're not part of code nation")
    }
}
console.log(dataChecker("code nation", 1))