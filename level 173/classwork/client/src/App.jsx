import { useState } from "react";
import Product from "../components/Product";

const App = () => {

  const [products, setProducts] = useState([]);

  const handleProduct = async () => {
    try {

      const req = await fetch("http://localhost:3000/products");

      const res = await req.json();

      console.log(res);

      if (!req.ok) {
        throw new Error("Can't get products");
      }

      setProducts(res);

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      {products ? (
        products.map(el => {
          return <Product el={el} />
        })
      ) : "No Products"}

      <button onClick={handleProduct}>Get All Products</button>
    </>
  );



}


export default App
