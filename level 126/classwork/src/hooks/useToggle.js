import { useState } from "react"

const useToggle = () => {
    const [toggle, setToggle] = useState("");

    const handleToggle = (color) => {
        setToggle(color);
    }

    return [toggle, handleToggle];
}

export { useToggle };