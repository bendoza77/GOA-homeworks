// Task 1

function calculator(a, b, op){
    if (op === "+"){
        return a +  b;
    }

    if(op === "-"){
        return a - b;
    }

    if(op === "*"){
        return a * b;
    }

    if(op === "/"){
        return a / b
    }

    return "Please Enter valid Math Operation";
}

// Task 2

function evenNumber(s){
    if(s % 2 === 0){
        return true;
    }
    return false;
}

function filter(arry, checkFunction = evenNumber){
    let res = [];

    for(const i of arry){
        if(checkFunction(i)){
            res.push(i)
        }
    }

    return res
}

module.exports = { calculator, filter};


