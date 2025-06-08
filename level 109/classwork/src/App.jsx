import Product from "./components/Product.jsx";

const App = () => {

    // Task 1-2

    const firstProduct = [
        {
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
    ]

    const secondProduct = [
        {
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  }
    ]

    const thirdProduct = [
        {
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  }
    ]
    
    return (
        <>
            <Product productInfo={["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 109.95]} />
            <Product productInfo={["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "Mens Casual Premium Slim Fit T-Shirts", 22.3]} />
            <Product productInfo={["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "Mens Cotton Jacket",  55.99]} />

        
            {firstProduct.map((el, i) => (
                <Product key= {`Product ${i}`} productInfo={[el.image, el.title, el.price]} />
            ))}

            {secondProduct.map((el, i) => (
                <Product key= {`Product ${i}`} productInfo={[el.image, el.title, el.price]} />
            ))}

            {thirdProduct.map((el, i) => (
                <Product key= {`Product ${i}`} productInfo={[el.image, el.title, el.price]} />
            ))}

        </>
    );
}

export default App
