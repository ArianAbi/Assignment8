import React, { FC } from "react";
import { Link } from "react-router-dom"
import "../Css/Products.css"

interface Products {
    id: number,
    title: string,
    description: string,
    img: string,
    price: string,
    onProductClick: CallableFunction
}

export const Products: FC<Products> = ({ title, price, description, img, id, onProductClick }) => {

    return (
        <>
            <div className="content" onClick={() => onProductClick(id)}>
                <Link to={`/detailPage/${id}`} className="img-wraper"><img src={img} alt="" /></Link>
                <div className="content-title-wrap">
                    <Link to={`/detailPage/${id}`} className="title">
                        {title}
                    </Link>
                    <div className="divider"></div>
                    <div className="summery">
                        <p>{description}</p>
                    </div>
                    <div className="price-tag">
                        <span>{price}</span>&#8198;$
                    </div>
                </div>

            </div>
            <div className="divider"></div>
        </>
    )
}

