const Card = ({data, index}) => {

    return (
        <>
            <div key={`Account ${index}`}>
                <h1>Email: {data[1]}</h1>
                <p>Name: {data[0]}</p>
                <p>Password: {data[2]}</p>
                <p>Role: {data[3]}</p>
            </div>
        </>
    );


}

export default Card;