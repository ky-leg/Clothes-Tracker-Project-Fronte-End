import React, {useState} from "react";

function NewForm({brands, customers, getIDForBrand, getIDForCustomer, onArticleAdd}){
    const [brand, setBrand] = useState('-')
    const [customer, setCustomer] = useState('-')
    const [category, setCategory] = useState('-')
    const [material, setMaterial] = useState('-')
    const [color, setColor] = useState('-')
    const [size, setSize] = useState('-')

    const brandsList = brands.length > 0
    && brands.map((brand, i) => {
        return(
            <option key={i} value={brand.name}>{brand.name}</option>
        )
    })

    const customersList = customers.length > 0 
    && customers.map((customer, i) => {
        return(
            <option key={i} value={customer.name}>{customer.name}</option>
        )
    })
    

    function saveNewArticle(){
        if (brand !== '-' || customer !== '-' || category !== '-' || material !== '-' || size !== '-' || color !== '-'){
            fetch("http://localhost:9292/articles",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    brand: getIDForBrand(brand),
                    customer: getIDForCustomer(customer),
                    category: category,
                    material: material,
                    color: color,
                    size: size,
                }),
            })
            .then((r) => r.json())
            .then((newArticle)=> onArticleAdd(newArticle))
        }
        else {
            alert('Invalid Submission')
        }
    }

    return(
        <React.Fragment>
            <h4>New Article:</h4>
            <form>
                <p>Brand:&nbsp;&nbsp;
                    <select value={brand} onChange={e => setBrand(e.target.value)}>
                        <option>-</option>
                        {brandsList}
                    </select>
                </p>
                <p>Customer:&nbsp;&nbsp;
                    <select value={customer} onChange={e => setCustomer(e.target.value)}>
                        <option>-</option>
                        {customersList}
                    </select>
                </p>
                <p>Category:&nbsp;&nbsp;
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option>-</option>
                        <option>Pants</option>
                        <option>Shirt</option>
                        <option>Sweater</option>
                        <option>Jacket</option>
                        <option>Shoes</option>
                    </select>
                </p>
                <p>Material:&nbsp;&nbsp;
                    <select value={material} onChange={e => setMaterial(e.target.value)}>
                        <option>-</option>
                        <option>Denim</option>
                        <option>Leather</option>
                        <option>Wool</option>
                        <option>Cotton</option>
                        <option>Silk</option>
                    </select>
                </p>
                <p>Color:&nbsp;&nbsp;
                    <select value={color} onChange={e => setColor(e.target.value)}>
                        <option>-</option>
                        <option>Red</option>
                        <option>Orange</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Indigo</option>
                        <option>Purple</option>
                        <option>White</option>
                        <option>Black</option>
                    </select>
                </p>
                <p>Size:&nbsp;&nbsp;
                    <select value={size} onChange={e => setSize(e.target.value)}>
                        <option>-</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </p>
            </form>
            <button onClick={saveNewArticle}>Save New Article</button>
        </React.Fragment>
    )
}

export default NewForm
