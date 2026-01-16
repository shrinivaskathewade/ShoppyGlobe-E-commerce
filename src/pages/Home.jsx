import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign:'center', marginTop:'20px'}}>Welcome to ShoppyGlobe</h1>
      <ProductList />
    </div>
  );
};

export default Home;
