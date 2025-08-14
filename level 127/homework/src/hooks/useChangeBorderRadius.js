import { useState } from "react"

const useChangeBorderRadius = () => {

    const [radius, setRadius] = useState("0");

    const handleChangeRadius = (border) => {
        setRadius(prev => prev = border);
    }

    return [radius, handleChangeRadius];

}

export { useChangeBorderRadius };