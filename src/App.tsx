import React from "react";
import { LandingPage } from "./Components/LandingPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import { DetailPage } from "./Components/DetailPage";
import "./main.css"

const App = () => {

    return (
        <>
            <div className="header">
                Title
            </div>

            <div className="body">
                <LandingPage />
                <LandingPage />
                <LandingPage />
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