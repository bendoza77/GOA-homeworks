import { use, useEffect, useState } from "react";

const Greet = () => {
    const handleTitle = (e) => {
        e.preventDefault();
        const { userName } = e.target;

        document.title = `Hello ${userName.value}`;

    }

    return (
        <>
            <form onSubmit={handleTitle}>
                <label htmlFor="userName">Enter Your Name: </label> <br /> <br />
                <input type="text" name="userName" id="userName" /> <br /> <br />
                <button>Submit</button>
            </form>
        </>
    );


}

export default Greet;