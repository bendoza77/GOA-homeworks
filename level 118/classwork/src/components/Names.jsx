import { useEffect, useState } from "react";

const Names = () => {

    const [user, setUser] = useState({});
    const nameArr = ["gabriel", "nika", "vano", "giorgi", "luka", "nino", "ana", "mari", "lado", "saba", "gurami"];
    const [fil, setFil] = useState(nameArr);

    const handleUser = ({target}) => {
        const { name, value } = target;
        setUser(prev => {
            return {...prev, [name]: value};
        })
    }

    useEffect(() => {
        const newArr = nameArr.filter(value => value.startsWith(user.userName));
        setFil(newArr);
        
    }, [user])

    return (
        <>
            <form onChange={handleUser}>
                <label htmlFor="userName">Enter Your Name</label> <br /> <br />
                <input  type="text" name="userName" id="userName" />
            </form>

            <p>First name: {user.userName}</p>

            <ol>
                {
                    fil.map((el, i) => {
                        return <li key={`name ${i}`}>{el}</li>
                    })
                }
            </ol>
           
        </>
    );

}

export default Names;