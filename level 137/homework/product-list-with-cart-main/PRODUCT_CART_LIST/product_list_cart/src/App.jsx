import Desserts from "./components/Desserts";
import { dessertList } from "./Dessert_list";
import { useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorage";
import Dish from "./components/Dish";
import Order from "./components/Order";

const App = () => {

  const [click, setClick] = useState([false, false, false, false, false, false, false, false, false]);
  const [dessert, setDessert] = useState(GetLocalStorage("dessert") || {});
  const [count, setCount] = useState(GetLocalStorage("count") || 1);
  const [price, setPrice] = useState(GetLocalStorage("prices") || []);
  const [order, setOrder] = useState(false);

  useEffect(() => {

    setCount(prev => {
      let count = 0;
      for (const [key, value] of Object.entries(dessert)) {
        count += value;
      }
      SetLocalStorage("count", count);
      return count;
    })

  }, [dessert])

  const handleOrder = () => {
    let order = 0

    Object.entries(dessert).map(([key, value], i) => {
      return order += Number.parseFloat(value) * Number.parseFloat(price[i][0]);
    })

    return order.toFixed(2);

  }

  const handleAdd = (data, id) => {

      setClick(prev => {
          prev = [false, false, false, false, false, false, false, false, false];
          prev[id] = true;
          return prev;
      })

      setDessert(prev => {
          if (dessert[data.name] === undefined) {
            SetLocalStorage("dessert", {...prev, [data.name]: 1});
            return {...prev, [data.name]: 1};
          } else {
            dessert[data.name] += 1;
            SetLocalStorage("dessert", dessert);
            return dessert;
          }
      })

      setPrice(prev => {
        SetLocalStorage("prices", [...prev, [data.price, data.image]]);
        return [...prev, [data.price, data.image]];
      })

  }

  
  const handlePlus = (data) => {

      setDessert(prev => {
          let update = {...prev}
          update[data.name] += 1
          SetLocalStorage("dessert", update);
          return update;
      })

  }

  const handleMinus = (data) => {

    setDessert(prev => {
      let update = {...prev}
      update[data.name] -= 1
      SetLocalStorage("dessert", update);
      return update;
    })


  }

  const handleConfirm = () => {
    setOrder(true);

    document.body.style.opacity = "0.8"

  }

  const handleStart = () => {

    setOrder(false);
    setCount(prev => {
        SetLocalStorage("count", 0);
        return 0;
    })

    setDessert(prev => {
        SetLocalStorage("dessert", {});
        return {};
    })

    setPrice(prev => {
        SetLocalStorage("prices", []);
        return [];
    })

    document.body.style.opacity = "1"

    }


  return (
    <>
      <main>
        <div className="overlay"></div>
        {/* The left side of main */}

        <div className="left_side">
          <div className="desserts">
            {dessertList.map((el, index) => {
              return (
                <>
                  <Desserts count={count} dessert={dessert} handleMinus={handleMinus} handlePlus={handlePlus} handleAdd={handleAdd} click={click} data={el} id={index} />
                </>
              );
            })}
          </div>

          {order && <Order handleStart={handleStart} setDessert={setDessert} setPrice={setPrice} setCount={count} setOrder={setOrder} handleOrder={handleOrder} dessert={dessert} price={price} />}
        </div>

        {/* The right side of main */}

        <div className="right_side">
          <h1>Your Cart ({count})</h1>
          <div className="result">
           {count === 0 &&  <img src="./src/assets/images/illustration-empty-cart.svg" alt="" />}
            {
              count === 0 ? <p>Your added items will appear here</p> : <div>

                <div className="product">
                  {Object.entries(dessert).map(([product, count], i) => {
                    return (
                      <>
                        <Dish setPrice={setPrice} dessert={dessert} setDessert={setDessert} number={count} price={price[i]} name={product} index={i} />
                      </>
                    );
                  })}
                </div>
                <div className="total">
                  <p>Order Total</p>
                  <p style={{color: "black", fontSize: 20, fontWeight: 600}}>${handleOrder()}</p>
                </div>

                <div className="deliver">
                  <img src="./src/assets/images/icon-carbon-neutral.svg" alt="" />
                  <p>This is a <b>carbon-neutral</b> delivery</p>
                </div>
                <button onClick={handleConfirm} className="con">Confirm Order</button>
              </div>
            }
          </div>
        </div>

      </main>
    </>
  );


}

export default App
