import Child from "./Child.jsx";

const Parent = ({myName}) => {
    return (
        <>
            <Child myName={myName}/>
        </>
    );
}

export default Parent;