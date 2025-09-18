import { useContext } from "react"
import { MyFirstContext } from "../context/MyFirstContext"

const Child = () => {

    const name = useContext(MyFirstContext);

    return (
        <>
            <p>Hello my name is {name}</p>
        </>
    );



}

export default Child