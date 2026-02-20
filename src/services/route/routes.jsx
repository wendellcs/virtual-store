import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Admin from "../../pages/Admin";
import Dashboard from "../../pages/Dashboard";
import About from "../../pages/About";
import Product from "../../pages/Product";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products/:slug/:id" element={<Product/>}/>

            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            {/* Not found */}
            
        </Routes>
    )
}