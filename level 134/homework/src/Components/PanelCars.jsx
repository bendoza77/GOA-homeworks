import { useEffect } from "react";
import { SetLocalStorage } from "../utils/LocalStorages";

const PanelCars = ({id, image, model, seats, price, currency, transmission, fuel, panel, setPanel}) => {

    const handleRemove = () => {

        const newArr = panel.filter(el => el.id !== id);
        setPanel(newArr);
        SetLocalStorage("panel", newArr);
    }

    return (
        <>
                <div key={`key ${id}`}>
                    <img style={{width: 500}} src={image} alt="" />

                    <div>
                        <p style={{fontSize: 30, fontWeight: 500, color: "black"}}>Model: {model}</p>
                        <p>Price: {price}</p>
                        <p>Currency: {currency}</p>
                        <p>Seats: {seats}</p>
                        <p>Transmission: {transmission}</p>
                        <p>Fuel: {fuel}</p>
                        <button onClick={handleRemove}>remove</button>
                    </div>
                </div>
        </>
    );


}

export default PanelCars;