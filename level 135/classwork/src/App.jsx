import { Route, Routes, useAsyncError, useNavigate, useSearchParams } from "react-router-dom";
import ProtectedRote from "./components/ProtectedRote";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Authorization from "./pages/Authorization";
import { GetLocalStorage, SetLocalStorage } from "./util/LocalStorage";
import { useState } from "react";

const App = () => {

  const [user, setUser] = useState(GetLocalStorage("user") || []);
  const [curUser, setCurUser] = useState(GetLocalStorage("curUser") || []);
  const [email, setEmail] = useState(false);
  const [error, setError] = useState(false);

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

  const handleRegister = (userForm) => {

    if (!handleSame(user).includes(userForm.userEmail)) {
      if (userForm.userName.trim() !== "" && userForm.userEmail.trim() !== "" && userForm.userPassword.trim() !== "" && userForm.role) {
        navigate("/autho");
        setUser(prev => {
          SetLocalStorage("user", [...prev, [userForm.userName, userForm.userEmail, userForm.userPassword, userForm.role]])
          return [...prev, [userForm.userName, userForm.userEmail, userForm.userPassword, userForm.role]]
        })
      }
    } else {
      setEmail(true);
    }

    
  }

  const handleAutho = (userForm) => {

    const arr = handleSame(user);

    if (arr.includes(userForm.userEmail) && arr.includes(userForm.userPassword)) {
      navigate("/");
      setCurUser(prev => {
          let newArr = [];

          for (const i of user) {
            if (i.includes(userForm.userEmail) && i.includes(userForm.userPassword)) {
              newArr = i
            }
          }

          SetLocalStorage("curUser", [newArr[0], newArr[1], newArr[2], newArr[3]])
          return [newArr[0], newArr[1], newArr[2], newArr[3]]

      })
    } else {
      setError(true);
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
        <Route path="/register" element={<Register setEmail={setEmail} setError={setError} email={email} handleRegister={handleRegister} />} />
        <Route path="/autho" element={<Authorization error={error} handleAutho={handleAutho} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );



}

export default App
