import React from "react";
import { DetailPage } from "./Components/DetailPage";
import { Products } from "./Components/Products";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

import "./main.css"
import ProductsData from "./products.json"

const App = () => {

    const renderdProducts = ProductsData.map(({ title, description }, i) => {
        return <Products title={title} description={description} key={i} />
    })

    return (
        <>
            <div className="header">
                <div className="logo">
                    Assignment 8
                </div>
            </div>

            <div className="content-container">
                {renderdProducts}
            </div>

            <div className="footer">
                Footer
            </div>
        </>
    )
    // return (
    //     <BrowserRouter>
    //                 <div>route test</div>
    //                 <div>
    //                     <ul>
    //                         <li><Link to={"/"} >Home</Link></li>
    //                         <li><Link to={"/about"} >about</Link></li>
    //                         <li><Link to={"/test"} >test</Link></li>
    //                     </ul>
    //                 </div>

    //                 <Routes>
    //                     <Route path="/" element={<Home />} />
    //                     <Route path="/about" element={<About />} />
    //                     <Route path="/test" element={<Test />} />
    //                 </Routes>
    //             </BrowserRouter>
    // )
}
export default App