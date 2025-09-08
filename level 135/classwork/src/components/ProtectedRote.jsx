import { Navigate } from "react-router-dom"

const ProtectedRote = ({children, curUser}) => {
    
    if (curUser.length === 0) {
        return <Navigate to={"/register"} />
    }

    return children;


}

export default ProtectedRote