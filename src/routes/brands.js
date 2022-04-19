import React, {useState, useEffect} from "react";
import Brand from "./components/brand"
import NewBrandForm from "./components/newbrandform"


export default function Brands() {
    const [brands, setBrands] = useState([''])
    const [newForm, setNewForm] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/brands')
        .then(r => r.json())
        .then(brandData => setBrands(brandData))
    }, [])
    
   

    function toggleNewForm(){
        setNewForm(!newForm)
    }

    const displayBrands = brands.map(brand => 
        <ul>
            <Brand
                key = {brand.id}
                brand={brand}
            />
        </ul>  
        // brand.name === "Tellason"
    )   

    function onBrandAdd(newBrand){
        setBrands([...brands, newBrand])
    }

    console.log(displayBrands)
 
    return (
        <main style={{ padding: "1rem 0"}}>
            <h2>Brands</h2>
            <div>
                <button onClick={toggleNewForm}>New Brand</button>
                {newForm? <NewBrandForm onBrandAdd={onBrandAdd}/>
                            :null}
                {brands? displayBrands:'Loading Brands!'}
            </div>
        </main>
    )
}

