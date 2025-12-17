import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Product from "../../pages/Product";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/product/:id" element={<Product/>}/>

            {/* Not found */}
            
        </Routes>
    )
}