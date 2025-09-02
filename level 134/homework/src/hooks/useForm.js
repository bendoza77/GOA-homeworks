const useForm = () => {

    const handleSubmit = (e, func) => {
        e.preventDefault();
        let user = {};

        for (const [key, value] of new FormData(e.target).entries()) {
            user[key] = value;
        }

        func(user);
    }

    return handleSubmit;

    
}

export { useForm }