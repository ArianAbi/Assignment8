import React, { useState, useEffect } from "react";
import axios from "axios";
import { DetailPage } from "./Components/DetailPage";
import { Products } from "./Components/Products";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
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
    const [selectedProductID, setSelectedProductID] = useState(0)

    useEffect(() => {
        (async () => {
            const fetchedProducts = await axios.get("https://fakestoreapi.com/products")

            setProducts(fetchedProducts.data)

        })()
    }, [])

    const onProductClick = (id: number) => {
        setSelectedProductID(id)
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
                        <Route path={`/detailPage/:id`} element={<DetailPage />} />
                    </Routes>
                </BrowserRouter>
            </div>

            <div className="footer">
                <div>
                    <FacebookIcon />
                    <WhatsAppIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <p>
                    @2020
                </p>
            </div>

        </>
    )

}
export default App