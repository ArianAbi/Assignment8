import React, { useState, useEffect } from "react";
import axios from "axios";
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

const App = () => {

    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState([])

    useEffect(() => {
        (async () => {
            const fetchedProducts = await axios.get("https://fakestoreapi.com/products")

            setProducts(fetchedProducts.data)

        })()
    }, [])

    const onProductClick = (props: object) => {
        console.log(props);
    }

    const renderdProducts = products.map(({ id, image, title, description }) => {
        return (
            <Products description={description} title={title} img={image} id={id} key={id} onProductClick={onProductClick} />
        )
    })



    return (
        <>
            <div className="header">
                <div className="logo">
                    Assignment 8
                </div>
            </div>

            <div className="content-container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={renderdProducts} />
                        <Route path="/productDetail" element={<DetailPage props={selectedProductId} />} />
                    </Routes>
                </BrowserRouter>
            </div>

            <div className="footer">
                Footer
            </div>

            {/* <BrowserRouter>
                <div>route test</div>
                <div>
                    <ul>
                        <li><Link to={"/"} >Home</Link></li>
                        <li><Link to={"/about"} >about</Link></li>
                        <li><Link to={"/test"} >test</Link></li>
                    </ul>
                </div>

                <Routes>
                    <Route path="/" ele />
                    <Route path="/about" element={<About />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter> */}
        </>
    )

}
export default App