import React, { useState, useEffect } from "react";
import axios from "axios";
import { Products } from "./Products";
import "../Css/DetailPage.css"

export const DetailPage = ({ selectedProductID }) => {

    const [fetchedProduct, setFetchedProduct] = useState({})

    useEffect(() => {

        (async () => {
            const selectedProduct = await axios.get(`https://fakestoreapi.com/products/${selectedProductID}`)

            setFetchedProduct(selectedProduct)

        })()

    }, [])

    if (Object.keys(fetchedProduct).length === 0) {
        return (<div>Loading</div>)
    }
    else {
        return (
            <div className="detail-container">
                <div className="product-detail-container">
                    <div className="image-container">
                        <img src={fetchedProduct.data.image} alt="" />
                    </div>

                    <h2>
                        {fetchedProduct.data.title}
                    </h2>

                    <div className="divider" style={{ width: "70%" }}></div>

                    <p>
                        {fetchedProduct.data.description}
                    </p>

                    <div className="divider"></div>

                    <div className="shopping-detail">
                        <button >
                            Add to cart
                        </button>
                        <h3 className="price-tag">
                            {`${fetchedProduct.data.price} $`}
                        </h3>
                    </div>

                </div>

            </div>
        )
    }
}