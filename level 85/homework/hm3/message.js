// Task 5

const obj = {
    hello: "englesh",
    Привет: "russia",
    こんにちは: "japanes",
    buna_ziua: "romania",
    hallo: "german"
}

function language(greet){
    return `${greet}: ${obj[greet]}`
}

module.exports = { language };