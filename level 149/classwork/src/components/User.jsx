import React from "react";

const User = React.memo(({handleNames}) => {

    return (
        <>
            <ul>
                <li>gabrieli</li>
                <li>luka</li>
                <li>nika</li>
                <li>giorgi</li>
                <li>data</li>
                <li>ana</li>
                <li>salome</li>
            </ul>
        </>
    );
    

});

export default User