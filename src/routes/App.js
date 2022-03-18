import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../container/Home";
import Home2 from "../container/Home2";
import Login from "../container/Login";
import Perfil from "../container/Perfil";
import Register from "../container/Register";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
    })
  }, [])


  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
        <Route path="/" element={!isLoggedIn ? <Home /> : <Navigate to="/profile" />} />
        <Route path="/list" element={!isLoggedIn ? <Home2 /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={isLoggedIn ? <Perfil /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
