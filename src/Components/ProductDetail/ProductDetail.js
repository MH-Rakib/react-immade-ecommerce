import React from "react";
import { useParams } from "react-router";
import fakeData from "../../assets/fakeData";
import Product from "../Product/Product";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((prd) => prd.key === productKey);
  // console.log(product);
  return (
    <div className="detailsContainer">
      <h4>{productKey} is your product</h4>
      <Product showButton={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
