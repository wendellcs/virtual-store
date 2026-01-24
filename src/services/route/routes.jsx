import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Admin from "../../pages/Admin";
import Dashboard from "../../pages/Dashboard";
import About from "../../pages/About";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            {/* Not found */}
            
        </Routes>
    )
}