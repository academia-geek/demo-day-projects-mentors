import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import NewMentors from "../container/NewMentors";
import Home from "../container/Home";
import ListMentors from "../container/ListMentors";
import Login from "../container/Login";
import Perfil from "../container/Perfil";
import Register from "../container/Register";
import LandingPage from "../container/LandingPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setUserEmail(auth.currentUser.email)
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
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/profile" />} />
        <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/profile" />} />
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/mentor" element={isLoggedIn ? <NewMentors userEmail={userEmail} /> : <Navigate to="/login" />} />
        <Route path="/Landing" element={<LandingPage isLoggedIn={isLoggedIn} />} />
        <Route path="/list" element={<ListMentors />} />
        <Route path="/profile/:codeProfile" element={isLoggedIn ? <Perfil isLoggedIn={isLoggedIn} /> : <Navigate to="/login" />} />
        <Route path="/profile/" element={isLoggedIn && <Navigate to="/list" />} />
      </Routes>
    </div>
  );
}

export default App;