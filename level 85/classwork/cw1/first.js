function countOddNumber(arry){
    let res = [];

    for(const i of arry){
        if(i % 2 === 0){
            res.push(i);
        }
    }

    return res;
}

function countEvenNumebr(arry){
    let res = [];
    for(const i of arry){
        if(i % 2 === 1){
            res.push(i);
        }
    }

    return res;
}

module.exports = { countEvenNumebr,  countOddNumber };

