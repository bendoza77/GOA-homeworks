import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRote from "./components/ProtectedRote";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Authorization from "./pages/Authorization";
import { useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "./util/LocalStorage";

const App = () => {

  const [user, setUser] = useState(GetLocalStorage("user") || []);
  const [curUser, setCurUser] = useState(GetLocalStorage("curUser") || []);
  const [same, setSame] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);


  const handleSame = (userArr) => {

    let arr = [];

    for (const i of userArr) {
      for (const j of i) {
        arr.push(j);
      }
    }

    return arr

  }

  const navigate = useNavigate();

  useEffect(() => {

    if (handleSame(user).includes(email)) {
      setSame(true);
    } else {
      setSame(false);
    }

    if (email.trim() !== "") {
      if (email !== curUser[1]) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    }

    if(pass.trim() !== "") {
      if (pass !== curUser[2]) {
        setValidPassword(true);
      } else {
        setValidPassword(false);
      } 
    }

  }, [email, pass])

  const handleRegister = (userForm) => {

    if (!handleSame(user).includes(userForm.userEmail)) {
      if (userForm.userName.trim() !== "" && userForm.userEmail.trim() !== "" && userForm.userPassword.trim() !== "" && userForm.role) {
        navigate("/autho");
        setUser(prev => {
          SetLocalStorage("user", [...prev, [userForm.userName, userForm.userEmail, userForm.userPassword, userForm.role]])
          return [...prev, [userForm.userName, userForm.userEmail, userForm.userPassword, userForm.role]]
        })
        setCurUser(prev => {
          SetLocalStorage("curUser", [userForm.userName, userForm.userEmail, userForm.userPassword, userForm.role])
          return [userForm.userName, userForm.userEmail, userForm.userPassword, userForm.role]
        })
      }
    }

    
  }

  const handleAutho = (userForm) => {

    if (userForm.userEmail === curUser[1] && userForm.userPassword === curUser[2]) {
      navigate("/");
    }

  }

  const handleLogOut = () => {

    setCurUser(prev => {
      SetLocalStorage("curUser", []);
      return [];
    })

  }

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRote curUser={curUser} ><Home handleLogOut={handleLogOut} user={user} curUser={curUser} /></ProtectedRote>} />
        <Route path="/register" element={<Register email={email} setEmail={setEmail} same={same} handleRegister={handleRegister} />} />
        <Route path="/autho" element={<Authorization validEmail={validEmail} validPassword={validPassword} setPass={setPass} setEmail={setEmail} handleAutho={handleAutho} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );



}

export default App
