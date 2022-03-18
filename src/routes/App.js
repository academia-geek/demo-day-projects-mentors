import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import Home2 from "../container/Home2";
import Login from "../container/Login";
import Perfil from "../container/Perfil";
import Register from "../container/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Home2 />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
