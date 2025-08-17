const useForms = () => {

    const handleSubmit = (e, func) => {
        e.preventDefault();
        const userInfo = {}

        for (const [key, value] of new FormData(e.target).entries()) {
            userInfo[key] = value;
        }

        func(userInfo);

    }

    return handleSubmit;

}

export { useForms };