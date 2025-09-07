const userForm = () => {

    const handleSubmit = (e, func) => {

        e.preventDefault();
        let userForm = {};

        for (const [key, value] of new FormData(e.target)) {
            userForm[key] = value;
        }

        func(userForm);

    }

    return handleSubmit;


}

export { userForm }