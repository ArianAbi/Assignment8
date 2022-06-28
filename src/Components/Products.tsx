import React, { FC } from "react";
import "../Css/Products.css"

interface Products {
    title: string,
    description: string
}

export const Products: FC<Products> = ({ title, description }) => {
    return (
        <>
            <div className="content">
                <div className="box"></div>
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

