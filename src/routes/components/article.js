import React, {useState} from "react";
import Update from './update'

function Article({category, material, color, size, brands, customers,id, brand_id, customer_id, getIDForBrand, getIDForCustomer, onArticleDelete}){
    // const customerName = customers.find(customer => customer.id === customer_id).name
    const [brandName, setBrandName] = useState([brands.find(brand=> brand.id===brand_id).name])
    const [customerName, setCustomerName] = useState(customers.find(customer => customer.id===customer_id).name)
    const [updateOn, setUpdateOn] =useState(false)
    console.log('im triggered!')
    function handleBrandChange(e){
        setBrandName(e.target.value)
    }

    function handleCustomerChange(e){
        setCustomerName(e.target.value)
    }

    function toggleUpdate(e){
        setUpdateOn(!updateOn)
    }

    
    function handleUpdate(){
        // console.log(getIDForBrand(brandName))
        // console.log(getIDForCustomer(customerName))
        // // VALIDATION BEFORE FETCH
        console.log(id)
        if (brandName !== '-' && customerName !== '-'){
            fetch(`http://localhost:9292/articles/${id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    brand: getIDForBrand(brandName),
                    customer: getIDForCustomer(customerName),
                }),
            })
            // .then((r) => r.json())
            // .then((newArticle)=> console.log(newArticle))
        }
        else {
            alert('Invalid Submission')
        }
    }

    function handleDelete(){
        fetch(`http://localhost:9292/articles/${id}`,{
                method: "DELETE",
            });
        onArticleDelete(id)
    }

    return(
        <li key={id}>
           {`${customerName? customerName:null}'s ${brandName? brandName:null} ${category}`}
            <ul>
                <li key={material}>material: {material}</li>
                <li key={color}>color: {color}</li>
                <li key={size}>size: {size}</li>
            </ul>
            <button onClick={e => toggleUpdate(e)}>Update Article</button>
            <button onClick={handleDelete}>Remove Article</button>
            {updateOn? <Update 
                        brands={brands}
                        brandName={brandName} 
                        customers={customers} 
                        customerName={customerName} 
                        handleBrandChange={handleBrandChange} 
                        handleCustomerChange={handleCustomerChange}
                        handleUpdate={handleUpdate}/>
                        :null}
        </li>
    )        
}

export default Article