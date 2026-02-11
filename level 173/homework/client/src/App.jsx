import { useState } from "react";
import Product from "../components/Product";

const App = () => {

  const [products, setProducts] = useState([]);

  const handleCreate = async (e) => {
    e.preventDefault();

    const obj = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      instock: e.target.instock.value
    }

    console.log(obj);

    try {

      const req = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })

      const res = await req.json();

      console.log(res);

      if (!req.ok) {
        throw new Error("Product can't created")
      }

      setProducts(prev => {
        return [...prev, res];
      })

    } catch(error) {
      console.log(error);
    }


  }

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

      <form onSubmit={handleCreate}>
        <input type="text" name="name" placeholder="Product name" required/>
        <input type="text" name="price" placeholder="Product price" required/>
        <input type="text"  name="category" placeholder="Product category" required/>
        <input type="text" name="instock" placeholder="Product instock" required/>
        <button>Create product</button>
      </form>
    </>
  );



}


export default App
