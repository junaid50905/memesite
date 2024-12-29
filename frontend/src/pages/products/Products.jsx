import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Products = () => {

    const [products, setProducts] = useState([])
    const api = 'https://api.escuelajs.co/api/v1/products'
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [api])



    return (

        <div>
            <h2>Products</h2>
            {products && products.map((product, index) => {
                return (
                    <div key={index}>
                        <img src={product.images[0]} height={300} width={300}/>
                        <h4>{product.title}</h4>
                        <Link to={`/products/${product.id}`}>View</Link>
                    </div>

                )
            })}
        </div>
    )
}

export default Products