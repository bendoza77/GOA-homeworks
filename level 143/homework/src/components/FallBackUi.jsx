const FallBackUi = ({text, resetErrorBoundary}) => {

    return (
        <>
            <div>
                <h1>{text}</h1>
                <button onClick={() => resetErrorBoundary()}>Reset</button>
            </div>
        </>
    );

}

export default FallBackUi