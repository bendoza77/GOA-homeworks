import { Link } from "react-router-dom";
import { SetLocalStorage } from "../utils/LocalStorages";

const CarDetails = ({data, key}) => {

    return (
        <>
            <div className="car" key={key}>
                <img src={data.image} alt="" />

                <div>
                    <p style={{fontSize: 30, fontWeight: 500, color: "black"}}>Model: {data.name}</p>
                    <p>Price: {data.price_per_day}</p>
                    <p>Currency: {data.currency}</p>
                    <p>Seats: {data.seats}</p>
                    <p>Transmission: {data.transmission}</p>
                    <p>Fuel: {data.fuel}</p>
                    <Link to={"/car"}><button onClick={() => SetLocalStorage("car", data)}>Add to panel</button></Link>
                </div>
            </div>
        </>
    );



}

export default CarDetails