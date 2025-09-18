const GetLocalStorage = (key) => {

    return JSON.parse(localStorage.getItem(key));
}

const SetLocalStorage = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}

export { GetLocalStorage, SetLocalStorage }