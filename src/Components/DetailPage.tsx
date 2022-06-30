import React, { useState, useEffect } from "react";
import axios from "axios";
import { Products } from "./Products";
import { useParams } from "react-router-dom";
import "../Css/DetailPage.css"

export const DetailPage = () => {

    const productProps = { title: '', description: '', image: '', price: '' }

    const [fetchedProduct, setFetchedProduct] = useState(productProps)

    //current product id form url params
    const { id } = useParams();


    useEffect(() => {

        (async () => {
            const { title, description, image, price } = await (await axios.get(`https://fakestoreapi.com/products/${id}`)).data


            setFetchedProduct({ title, description, image, price })

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
                        <img src={fetchedProduct.image} alt="" />
                    </div>

                    <h2>
                        {fetchedProduct.title}
                    </h2>

                    <div className="divider" style={{ width: "70%" }}></div>

                    <p>
                        {fetchedProduct.description}
                    </p>

                    <div className="divider"></div>

                    <div className="shopping-detail">
                        <button >
                            Add to cart
                        </button>
                        <h3 className="price-tag">
                            {`${fetchedProduct.price} $`}
                        </h3>
                    </div>

                </div>

            </div>
        )
    }
}