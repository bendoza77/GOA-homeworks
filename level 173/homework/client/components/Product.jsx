const Product = (el) => {

    const prod = el.el

    return (
        <>
            <div key={`product ${prod.id}`}>
                <p>Name: {prod.name}</p>
                <p>Category: {prod.category}</p>
                <p>Price: {prod.price}</p>
                <p>inStock: {prod.inStock}</p>
            </div>
        </>
    );


}

export default Product