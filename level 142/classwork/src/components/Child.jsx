import { useState } from "react";

const Child = () => {

    // Here I have created a click condition which is used to cause an error on the second button as well. 
    // I have used onClick() and arrow function but in order to change the click attribute from false to true 
    // when an error occurs, I have used if and written a condition that if click is True then I will use throw 
    // new Error to cause the error I created, so that later using ErrorBoundary if an error occurs on the site, 
    // the entire site will not crash but fallback to the place where the error occurred.
    const [click, setClick] = useState(false);

    if (click) {
        throw new Error("Why WE NEED THIS button")
    }


    return (
        <>
            <div style={{marginTop: 20}}>
                {/* Here I have created two buttons, the first button has an onClick() attribute in which I have created 
                an arrow function that renders text in the console when the button is clicked. */}
                <button onClick={() => console.log("The button is clicked")}>Click me</button>
                <button onClick={() => setClick(true)}>Click me</button>
            </div>
        </>
    );



}

export default Child