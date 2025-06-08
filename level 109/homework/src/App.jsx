import Parent from "./components/Parent.jsx";

function App() {

    // Task 2

    // Props are the same property that is passed to a component, that is, props are the same function property and are 
    // used to allow the parent component to pass data to the child component. Props are used to allow the child component 
    // to work with different data and also to make the component reusable in different situations. After passing the prop, 
    // the component can return different results in different situations. 
    // All this is done using props.
    

    // Task 3

    const myName = "Gabriel";
    return (
        <>
            <Parent myName={myName}/>
        </>
    );


}

export default App
