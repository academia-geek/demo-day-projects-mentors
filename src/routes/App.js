import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../container/Login";
import Register from "../container/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
