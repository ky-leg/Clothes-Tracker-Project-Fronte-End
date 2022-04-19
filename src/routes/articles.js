import React, {useState, useEffect} from "react";
import Article from "./components/article";
import NewForm from "./components/newform"

export default function Articles() {

    const [articles, setArticles] = useState([])
    const [brands, setBrands] = useState([])
    const [customers, setCustomers] = useState([])
    const [newForm, setNewForm] = useState(false)

    
    useEffect(() => {
        fetch('http://localhost:9292/articles')
        .then(r => r.json())
        .then(articleData => setArticles(articleData))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/brands')
        .then(r => r.json())
        .then(brandData => setBrands(brandData))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/customers')
        .then(r => r.json())
        .then(customerData => setCustomers(customerData))
    }, [])
    
    function toggleNewForm(){
        setNewForm(!newForm)
    }

    function onArticleDelete(id){
        setArticles(articles.filter(article=> article.id!==id))
        // brands.filter(brand=> brand.id!==id)
    }

    function onArticleAdd(newArticle){
        setArticles([...articles, newArticle])
    }

    const displayArticles = articles.map(article => {
        return(
            <ul>
                <Article
                    key = {article.id}
                    category = {article.category}
                    material = {article.material}
                    color = {article.color}
                    size = {article.size}
                    customer_id= {article.customer_id}
                    brand_id= {article.brand_id}
                    brands = {brands}
                    customers = {customers}
                    id={article.id}
                    getIDForBrand={getIDForBrand} 
                    getIDForCustomer={getIDForCustomer}
                    onArticleDelete={onArticleDelete}
                />
            </ul>  
        )
               
        }        
    )

    console.log(displayArticles)

    function getIDForBrand(newBrandName){
        return brands.filter(brand => brand.name===newBrandName)[0].id
    }

    function getIDForCustomer(newCustomerName){
        return customers.filter(thisCustomer => thisCustomer.name===newCustomerName)[0].id
    }

    return (
        <main style={{ padding: "1rem 0"}}>
            <h2>Articles</h2>
            <div>
                <button onClick={toggleNewForm}>New Article</button>
                {newForm? <NewForm 
                            brands={brands} 
                            customers={customers} 
                            getIDForBrand={getIDForBrand} 
                            getIDForCustomer={getIDForCustomer}
                            onArticleAdd={onArticleAdd}/>
                            :null}
                {brands? displayArticles:null}
            </div>
        </main>
    )
}