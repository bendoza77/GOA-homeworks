import OrderDish from "./OrderDish";

const Order = ({dessert,handleOrder, handleStart, price}) => {

    return (
        <>
            <div className="order_div">
               <div className="order_title">
                 <img src="./src/assets/images/icon-order-confirmed.svg" alt="" />
                 <h1>Order Confirmed</h1>
                 <p>We hope you enjoy your food!</p>
               </div>

               <div className="orders">
                {Object.entries(dessert).map(([key, value], index) => {
                    return <OrderDish order={key} number={value} index={index} price={price[index]} />
                })}
                <div className="order_order">
                    <p className="or">Order Total</p>
                    <p className="order_total">${handleOrder()}</p>
                </div>
               </div>

               <button onClick={handleStart} className="new">Start New Order</button>
            </div> 
        </>
    );


}

export default Order