const Desserts = ({data, id, count, click, handleAdd, dessert, handlePlus, handleMinus}) => {

    return (
        <>
            <div key={`dessert ${id}`} className="dessert_div">
                {/* The top side of dessert div */}

                <div className="top_side">
                    <img src={data.image} alt="" />
                    <button onClick={() => handleAdd(data, id)} className="button" style={{display: click[id] ? "none" : "block"}} ><img src="./src/assets/images/icon-add-to-cart.svg" alt="" /> Add to Cart</button>
                    <div style={{display: click[id] ? "flex" : "none"}} className="order_button">
                        <button disabled={dessert[data.name] === 1 ? true : false} onClick={() => handleMinus(data)}>-</button>
                        <p>{count === 0 ? 1 : dessert[data.name]}</p>
                        <button onClick={() => handlePlus(data)}>+</button>
                    </div>
                </div>

                {/* The bottom side of dessert div */}

                <div className="bottom_side">
                    <p className="title">{data.title}</p>
                    <p className="name">{data.name}</p>
                    <p className="price">${data.price}</p>
                </div>

            </div>
        </>
    );



}

export default Desserts