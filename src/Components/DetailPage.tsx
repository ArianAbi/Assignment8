import React, { useState, useEffect } from "react";
import axios from "axios";
import { Products } from "./Products";

export const DetailPage = (props: object) => {

    useEffect(() => {
        console.log(props);

    }, [])

    return (
        <div>Detail Page</div>
    )
}