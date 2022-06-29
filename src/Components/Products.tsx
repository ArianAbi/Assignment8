import React, { FC } from "react";
import { Link } from "react-router-dom"
import "../Css/Products.css"

interface Products {
    id: number,
    title: string,
    description: string,
    img: string,
    onProductClick: CallableFunction
}

export const Products: FC<Products> = ({ title, description, img, id, onProductClick }) => {

    const props = {
        title: title,
        description: description,
        img: img,
        id: id,
    }

    return (
        <>
            <div className="content" onClick={() => onProductClick(props)}>
                <Link to="/detailPage" className="img-wraper"><img src={img} alt="" /></Link>
                <div className="content-title-wrap">
                    <Link to="/detailPage" className="title">
                        {title}
                    </Link>
                    <div className="divider"></div>
                    <div className="summery">
                        <p>{description}</p>
                    </div>
                </div>

            </div>
            <div className="divider"></div>
        </>
    )
}

