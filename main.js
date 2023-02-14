if(1+1 < 5){
    console.log ("LIES!")} else{
        console.log ("True fact!")
}

if(4+5 <= 20){
    console.log ("True Fact!")} else{
        console.log ("LIES!")
}

if(6-2 >=0){
    console.log ("LIES!")} else{
        console.log ("True Fact!")
}

likesDogs = true

if(likesDogs){
    console.log("You're a dog and cat person!")} else{console.log ("You're a cat person")
}

const person = {
    name: "James",
    preferredLanguage: "French",
}

if(person.preferredLanguage === "English"){
    console.log(`Hello, ${person.name}!`)
}else if (person.preferredLanguage === "Spanish")
{console.log(`Hola, ${person.name}!`)
}else if (person.preferredLanguage === "French")
{console.log(`Bonjour, ${person.name}!`)}

var grade = 82

if (grade >= 0 && grade <= 69){
    console.log("You got an F")
} else if (grade >= 70 && grade <= 76){
    console.log("You got a D")
} else if (grade >= 77 && grade <= 84){
    console.log("You got a C")
} else if (grade >= 84 && grade <= 92){
    console.log("You got a B")
} else if (grade >= 93 && grade <= 100){
    console.log("You got a A")
}