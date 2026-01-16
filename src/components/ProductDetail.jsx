import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => { setProduct(res.data); setLoading(false); })
      .catch(() => { setError("Product not found"); setLoading(false); });
  }, [id]);

  if (loading) return <p style={{textAlign:'center'}}>Loading...</p>;
  if (error) return <p style={{textAlign:'center'}}>{error}</p>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><b>Price:</b> ${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        <br /><br />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
