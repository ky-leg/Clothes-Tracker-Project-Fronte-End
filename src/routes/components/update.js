import React, {useState} from "react";

function Update({brands, brandName, customers, customerName, handleBrandChange, handleCustomerChange, handleUpdate}){
     

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



    return(
        <React.Fragment>
            <br/>
            <p>Update Article?</p>
            <form>
                <p>Brands:
                    <select value={brandName} onChange={e => handleBrandChange(e)}>
                        <option value='-'>-</option>
                        {brandsList}
                    </select>
                </p>
                <p>Customers:
                    <select value={customerName} onChange={e => handleCustomerChange(e)}>
                        <option value='-'>-</option>
                        {customersList}
                    </select>
                </p>
            </form>
            <button onClick={handleUpdate}>Save Changes</button>
        </React.Fragment>
    )
}

export default Update