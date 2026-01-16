import React from "react";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
