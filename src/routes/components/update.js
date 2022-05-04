import React, {useState} from "react";

function Update({brands, customers, id, getIDForCustomer, getIDForBrand}){
    const [brandName, setBrandName] = useState('-')
    const [customerName, setCustomerName] = useState('-')

    function handleUpdate(){
        // console.log(getIDForBrand(brandName))
        // console.log(getIDForCustomer(customer.name))
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
                    <select value={brandName} onChange={e => setBrandName(e.target.value)}>
                        <option value='-'>-</option>
                        {brandsList}
                    </select>
                </p>
                <p>Customers:
                    <select value={customerName} onChange={e => setCustomerName(e.target.value)}>
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