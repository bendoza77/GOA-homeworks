const Product = ({productInfo}) => {
    return (
        <div>
            <img src={productInfo[0]} />
            <h1>{productInfo[1]}</h1>
            <p>{productInfo[2]}Geo</p>
        </div>
    );
}

export default Product;