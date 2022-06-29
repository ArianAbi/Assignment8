import React, { FC } from "react";
import "../Css/Products.css"

interface Products {
    title: string,
    description: string,
    img: string,
    price: number
}

export const Products: FC<Products> = ({ title, description, img, }) => {

    return (
        <>
            <div className="content">
                <div className="img-wraper"><img src={img} alt="" /></div>
                <div className="content-title-wrap">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>

            </div>
            <div className="divider"></div>
        </>
    )
}

