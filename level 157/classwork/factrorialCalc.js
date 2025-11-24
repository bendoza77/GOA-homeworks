const factorialCalc = (num) => {

    if (num === undefined) {
        return "Number was not enterd";
    }

    let res = 1

    for (let i = 1; i<=parseInt(num); i++) {
        res *= i;
    }

    return res;

}

module.exports = factorialCalc