import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Product from "../Product/Product";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productKey } = useParams();
  // const product = fakeData.find((prd) => prd.key === productKey);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productKey}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productKey]);

  // console.log(product);
  return (
    <div className="detailsContainer">
      <h4>{productKey} is your product</h4>
      <Product showButton={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
