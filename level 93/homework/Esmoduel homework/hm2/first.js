function mult(arr){
    let count = 1;
    for(const i of arr){
        count *= i;
    }

    return count;
}

export default mult;