import React, {useState} from "react";

function NewBrandForm({onBrandAdd}){
    const [name, setName] = useState('-')
    const [origin, setOrigin] = useState('-')

    function saveNewBrand(){
        if (name !== '' && origin !== '' && name !== '-' && origin !== '-'){
            fetch("http://localhost:9292/brands",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    origin: origin,
                })
            })
            .then((r) => r.json())
            .then((newBrand)=> onBrandAdd(newBrand))
        }
        else {
            alert('Invalid Submission')
        }
    }
    console.log(origin)
    return(
        <React.Fragment>
            <h4>New Article:</h4>
            <form>
                <p>Name:&nbsp;&nbsp;
                    <input onChange={e => setName(e.target.value)}/>
                </p>
                <p>Origin:&nbsp;&nbsp;
                    <input type="text" onChange={e => setOrigin(e.target.value)}/>
                </p>
            </form>
            <button onClick={saveNewBrand}>Save New Article</button>
        </React.Fragment>
    )
}

export default NewBrandForm
