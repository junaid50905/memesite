import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // destructure to get 'id' from params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const api = `https://api.escuelajs.co/api/v1/products/${id}`; // move api inside useEffect
    fetch(api)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  console.log(product);
  
  return (
    <div>
      <h4>Product Details</h4>
      {product ? (
        <div>
          <img src={product.images[0]} height={400} width={500} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
