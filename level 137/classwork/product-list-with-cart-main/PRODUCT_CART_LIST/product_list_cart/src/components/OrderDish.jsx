const OrderDish = ({order, number, price, index}) => {

    return (
        <>
            <div className="submit" key={`order ${index}`}>
                <div className="left">
                    <img src={price[1]} alt="" />
                    <div className="number">
                        <p>{order}</p>
                        <div className="count">
                            <p style={{color: "hsl(14, 86%, 42%)"}}>{number}x</p>
                            <p>@ {price[0]}</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <p>${(price[0] * number).toFixed(2)}</p>
                </div>
            </div>
        </>
    );


}

export default OrderDish