import { SetLocalStorage } from "../utils/LocalStorage";

const Dish = ({name, number, price, index, setDessert, setPrice}) => {

    const handleFilter = () => {

        setDessert(prev => {
            let update = Object.fromEntries(Object.entries(prev).filter((_, i) => i !== index));
            SetLocalStorage("dessert", update);
            return update;
        })

        setPrice(prev => {
            SetLocalStorage("prices", prev.filter((_, i) => i !== index));
            return prev.filter((_, i) => i !== index);
        })
        
    }

    return (
        <>
            <div className="dish" key={`dish ${index}`}>
                <div className="info">
                    <p className="info_name">{name}</p>
                    <div className="x">
                        <p style={{color: "hsl(14, 86%, 42%)", fontWeight: 600}}>{number}x</p>
                        <div className="pricex">
                            <p>@</p>
                            <p style={{marginLeft: 5}}>${price[0]}</p>
                            <p style={{marginLeft: 10}}>${price[0] * number}</p>
                        </div>
                    </div>
                </div>

                <div className="delete">
                    <button onClick={() => handleFilter()}>x</button>
                </div>
            </div>
        </>
    );


}

export default Dish