import React, { useState, useEffect } from "react";
import axios from "axios";
import { DetailPage } from "./Components/DetailPage";
import { Products } from "./Components/Products";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircle from '@mui/icons-material/AccountCircle';
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

    const renderdProducts = products.map(({ id, image, title, price, description }) => {
        return (
            <Products description={description} title={title} img={image} price={price} id={id} key={id} onProductClick={onProductClick} />
        )
    })



    return (
        <>
            <BrowserRouter>
                <div className="header">
                    <Link to="/" className="store-logo-link">
                        Fake Store
                    </Link>
                    <AccountCircle sx={{ fontSize: "2rem" }} />
                </div>

                <div className="content-container">

                    <Routes>
                        <Route path="/" element={renderdProducts} />
                        <Route path={`/detailPage/:id`} element={<DetailPage />} />
                    </Routes>

                </div>

                <div className="footer">
                    <div className="social-media-container">
                        <div>
                            <FacebookIcon />
                            <span>Facebook</span>
                        </div>
                        <div>
                            <WhatsAppIcon />
                            <span>WhatsApp</span>
                        </div>
                        <div>
                            <InstagramIcon />
                            <span>Instagram</span>
                        </div>
                        <div>
                            <TwitterIcon />
                            <span>Twitter</span>
                        </div>
                    </div>
                    <p>
                        @2022
                    </p>
                </div>
            </BrowserRouter>
        </>
    )

}
export default App