const SetLocalStorage = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}

const GetLocalStorage = (key) => {

    return JSON.parse(localStorage.getItem(key));

}

export { SetLocalStorage, GetLocalStorage }