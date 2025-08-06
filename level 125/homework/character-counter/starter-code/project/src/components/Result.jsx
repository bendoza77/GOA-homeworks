const Result = ({number, text, backgroundColor, image}) => {

    return (
        <>
            <div style={{backgroundColor: backgroundColor}} className="result_div">
                <div className="left_side">
                    <h1>{number}</h1>
                    <p>{text}</p>
                </div>

                <img src={image} alt="" />
            </div>
        </>
    );

}

export default Result