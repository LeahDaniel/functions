// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7
//     return ageInDogYears
// }

// const stringOfFavDog = () => {
//     if (breed === "meow") {
//         return "I like cats."
//     } else {
//         return `My favorite dog breed is ${breed}.`
//     }
// }

// const myFavorite = stringOfFavDog()

// console.log(`When it comes to pets, ${myFavorite}`)

// const add = (num1, num2, num3) => {
//     return num1 + num2 + num3
// }

// console.log(add(17,4,11))

// const go = (direction, speed) => {
//     if (speed > 75) {
//         return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
//     } else {
//         return `The car is moving ${direction} at ${speed} mph.`
//     }
// }
// // console.log(go("forwards", 74))

// const evenOrOdd = (arr) => {
//     const result = []
//     for (const num of arr) {
//         if (num % 2 === 0) {
//             result.push("Even")
//         } else if (num % 2 === 1) {
//             result.push("Odd")
//         }
//     }
//     return result
// }

// const array1 = [5, 6, 7, 8, 9, 10, 0] 

// console.log(evenOrOdd(array1))

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// const filterWords = (wordsArray) => {
//     const filteredArray = [];
//     for (const word of wordsArray) {
//         if (word.startsWith("k") === true){
//             continue
//         } else {
//             filteredArray.push(word)
//         }
//     }
//     return filteredArray
// }

// const formSentence = (filteredArray) => {
//      return filteredArray.join(' ')
// }

// filteredArray = filterWords(words)

// console.log(formSentence(filteredArray))

// const catchChance = () => {
//     const randomNumber = Math.random() * 3;
//     if (randomNumber >= 0 && randomNumber < 1){
//         console.log("Sven hooked a tuna!");
//         // console.log(randomNumber);
//         return true
//     } else {
//         console.log("Sven came up empty-handed");
//         // console.log(randomNumber);
//         return false
//     }
// }

// catchChance()

// const orderMeal = (sandwichtype, desserttype, drinktype, sidetype) => {
//     return {
//         sandwich:sandwichtype,
//         side:sidetype,
//         drink:drinktype,
//         dessert:desserttype
//     }    
// }
// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

// console.log(takeOutBag)

// const donald = {
//     firstName: "Donald",
//     lastName: "McLelland"
// }
// const chore1 = (person) => 
// {`${person.firstName} ${person.lastName} mowed the lawn`
// }
// const chore2 = (person) => {
//     return `${person.firstName} ${person.lastName} washed the dishes`
// }
// const chore3 = (person) => {
//     return `${person.firstName} ${person.lastName} vacuumed the car`
// }
// const chore4 = (person) => {
//     return `${person.firstName} ${person.lastName} weeded the garden`
// }
// const chore5 = (person) => {
//     return `${person.firstName} ${person.lastName} made the bed`
// }
// const chore6 = (person) => {
//     return `${person.firstName} ${person.lastName} swept the floor`
// }

// const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
//     return `On ${day}, ${firstChore(person)}, ${secondChore(person)}, and ${thirdChore(person)}.`
// }

// console.log(dayPlanner(chore4, chore2, chore3, donald, "Tuesday"))




const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
//Could also do a for of loop below?
for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



//Is this just another way to write a function? As opposed to function conjunction, etc etc
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord
}

wordsCombined = conjunction("Master", "Card")
console.log(wordsCombined)




const modSquad = {
    members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    series: {
        start: "1968",
        end: "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})

console.log(HTMLRepresentation)



//Already went through with Steve
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [3,3]]

for (const location of locations) {
    let invalidLocation = false
    if (location[0] > 2) {
        invalidLocation = true
    }
    
    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    const suffix = " the Llama"

    const namer = function () {
        return possibleNames[randomizer]
    }

    return namer() + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker)

