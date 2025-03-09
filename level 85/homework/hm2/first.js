// Task 3

function countElement(arry){
    let count = 0;
    for(const i of arry){
        count += i;
    }

    return count;
}

export { countElement };