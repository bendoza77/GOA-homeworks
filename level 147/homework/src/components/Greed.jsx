import React from "react";

const Greed = React.memo(({name}) => {

    return (
        <>
            <h1>Hello my name is {name}</h1>
        </>
    );

});

export default Greed