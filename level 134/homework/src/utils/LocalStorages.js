const GetLocalStorage = (key) => {

    return JSON.parse(localStorage.getItem(key));

}

const SetLocalStorage = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
    return value;

}

export { GetLocalStorage, SetLocalStorage }