import { useState } from "react";
import Presentaitonal from "./Presentaitonal";

const Container = () => {

    const [user, setUser] = useState({});

    const handleUser = ({target}) => {
        const { name, value } = target;
        setUser(prev => {
            return {...prev, [name]: value}
        })
    }

    return <Presentaitonal user={user} handleUser={handleUser} />

}

export default Container;