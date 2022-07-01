import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Products } from "./Products";
import { useParams } from "react-router-dom";
import "../Css/DetailPage.css"

export const DetailPage = () => {

    const productProps = { title: '', description: '', image: '', price: '' }

    const [fetchedProduct, setFetchedProduct] = useState(productProps)
    const [loaded, setLoaded] = useState(false);

    //current product id form url params
    const { id } = useParams();


    useEffect(() => {

        (async () => {
            const { title, description, image, price } = await (await axios.get(`https://fakestoreapi.com/products/${id}`)).data


            setFetchedProduct({ title, description, image, price })
            setLoaded(true)
        })()

    }, [])

    const contentToDisplay = {
        img: loaded ? <img src={fetchedProduct.image} alt="" /> : <Skeleton variant="rectangular" width="100%" height="90%" />,
        title: loaded ? <h2>{fetchedProduct.title}</h2> : <Skeleton variant="text" width="60%" height="2rem" />,
        description: loaded ? <p>{fetchedProduct.description}</p> : <Skeleton variant="text" width="100%" height="200px" />,
        price: loaded ? `${fetchedProduct.price} $` : <Skeleton variant="text" width="60px" height="30px" />
    }

    return (
        <div className="detail-container">
            <div className="product-detail-container">
                <div className="image-container">
                    {contentToDisplay.img}
                </div>

                {contentToDisplay.title}

                <div className="divider" style={{ width: "70%" }}></div>

                {contentToDisplay.description}


                <div className="shopping-detail">
                    <button >
                        Add to cart
                    </button>
                    <h3 className="price-tag">
                        {contentToDisplay.price}
                    </h3>
                </div>

            </div>

        </div>
    )
}