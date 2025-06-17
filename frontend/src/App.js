import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fitpage-6j0w.onrender.com/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Ratings & Reviews</h1>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
