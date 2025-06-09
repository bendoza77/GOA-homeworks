import Parent from "./components/Parent.jsx"

const App = () => {

    const handleHover = () => {

        alert("This is alert message");

    }


    return (
        <>
            <Parent onHover={handleHover}>
                <h1>First Child</h1>
                <h2>Second Child</h2>
                <h3>Third Child</h3>
            </Parent>
        </>
    );


}

export default App
