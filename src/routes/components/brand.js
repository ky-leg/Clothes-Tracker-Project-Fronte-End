import React, {useState} from "react";
// import Brands from "../brands";


function Brand({brand}){

    console.log(brand)
    
    return(
        <li key={brand.id}>
           {`${brand.name}`}
            <ul>
                <li key={brand.origin}>origin: {brand.origin}</li>
            </ul>
        </li>
    )        
}

export default Brand