import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Sobre from "./pages/Sobre.jsx";
import Login from "./pages/login.jsx";

export default function Navegacao () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}