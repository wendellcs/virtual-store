import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/login";
import Product from "../../pages/product";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/product/:id" element={<Product/>}/>

            {/* Not found */}
        </Routes>
    )
}