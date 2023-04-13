import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Band from "./pages/Band";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/bands/:id" element={ <Band/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;