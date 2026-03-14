import { createContext, useContext, useState } from "react";
import { usePost } from "./PostContext";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const API = "http://localhost:3000/api"

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const { clearPosts } = usePost();


    const getUsers = async () => {
        try {

            const req = await fetch(`${API}/users`);

            const res = await req.json();

            setUsers(res.data.users);

        } catch(err) {
            console.log(err);
        }


    }

    const register = async (userObj) => {

        try {

            const req = await fetch(`${API}/users/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userObj)
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't register user");
            }

            setUsers(prev => {
                return [...prev, res.data.newUser];
            })
            
        }catch(err) {
            console.log(err);
        }


    }

    const login = async (userObj) => {

        try {

            const req = await fetch(`${API}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userObj)
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't login user");
            }

            setUser(res.data.user);

        } catch(err) {
            console.log(err);
        }


    }

    const logout = () => {
        setUser([]);
        clearPosts();
    }

    const handledelete = async (userId) => {

        try {

            const req = await fetch(`${API}/users/${userId}`, {
                method: "DELETE"
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't delete user");
            }

            setUsers(users.filter(el => el.id !== userId * 1));


        } catch(err) {
            console.log(err);
        }


    }



    return (
        <>
            <AuthContext.Provider value={{user, users, register, login, handledelete, logout, getUsers}}>
                {children}
            </AuthContext.Provider>
        </>
    );


}

export { useAuth, AuthProvider }