import { useContext } from "react"
import { MyFirstContext } from "../context/MyFirstContext"

const Greed = () => {

    const name = useContext(MyFirstContext);

    return (
        <>
            <p>Hello my name is {name}</p>
        </>
    );


}

export default Greed