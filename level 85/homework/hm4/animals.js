// Task 7

const animalObj = {
    tiger: "WHOA",
    cat: "meow",
    dog: "whoh",
    lion: "WHOA",
    fish: "BLUB"
}

function getAnimalVoice(animal){
    return `${animal}: ${animalObj[animal]}`
}

export { getAnimalVoice }