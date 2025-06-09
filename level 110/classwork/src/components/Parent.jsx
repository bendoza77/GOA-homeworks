const Parent = ({children, onHover}) => {

    return (
        <>
            <div>{children}</div>
            <button onMouseOver={onHover}>Hover me</button>
        </>
    );
}

export default Parent;