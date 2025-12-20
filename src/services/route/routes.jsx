import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Admin from "../../pages/Admin";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/admin" element={<Admin/>}/>
            {/* Not found */}
            
        </Routes>
    )
}