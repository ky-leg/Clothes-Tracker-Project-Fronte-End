import React, {useState} from "react";
import Update from './update'

function Article({category, material, color, size, brand, customer, id, getIDForBrand, getIDForCustomer, onArticleDelete, brands, customers}){
    // console.log(brand)
    // const customer.name = customers.find(customer => customer.id === customer_id).name
    
    const [updateOn, setUpdateOn] =useState(false)
    console.log('im triggered!')

    // function handleBrandChange(e){
    //     setBrandName(e.target.value)
    // }

    // function handleCustomerChange(e){
    //     setCustomerName(e.target.value)
    // }

    function toggleUpdate(e){
        setUpdateOn(!updateOn)
    }

    
    

    function handleDelete(){
        fetch(`http://localhost:9292/articles/${id}`,{
                method: "DELETE",
            });
        onArticleDelete(id)
    }

    return(
        <li key={id}>
           {`${customer.name? customer.name:null}'s ${brand.name? brand.name:null} ${category}`}
            <ul>
                <li key={material}>material: {material}</li>
                <li key={color}>color: {color}</li>
                <li key={size}>size: {size}</li>
            </ul>
            <button onClick={e => toggleUpdate(e)}>Update Article</button>
            <button onClick={handleDelete}>Remove Article</button>
            {updateOn? <Update 
                        brands={brands}
                        id={id}
                        brandName={brand.name} 
                        customers={customers} 
                        customerName={customer.name} 
                        // handleBrandChange={handleBrandChange} 
                        // handleCustomerChange={handleCustomerChange}
                        getIDForBrand={getIDForBrand}
                        getIDForCustomer={getIDForCustomer}
                        
                        />
                        :null}
        </li>
    )        
}

export default Article