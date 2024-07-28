import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countAction } from "../store";
import { useFetch } from "../components/hooks/useFetch";
import "bootstrap-icons/font/bootstrap-icons.css";
const DetailPage = () => {
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cartCount.count);
  const params = useParams();
  const products = useFetch();
  console.log(products);
  const detailProduct = products.find(
    (item) => item._id.$oid === params.productId
  );
  console.log(detailProduct);
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-3">
              <img style={{ width: "100%" }} src={detailProduct.img1}></img>
              <img style={{ width: "100%" }} src={detailProduct.img2}></img>
              <img style={{ width: "100%" }} src={detailProduct.img3}></img>
              <img style={{ width: "100%" }} src={detailProduct.img4}></img>
            </div>
            <div className="col-9">
              <img
                src={detailProduct.img1}
                style={{ width: "100%", padding: "20px 0 0" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="col-6">
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            {detailProduct.name}
          </p>
          <p style={{}}>
            {detailProduct.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            VND
          </p>
          <p style={{ fontSize: "15px", fontWeight: "100" }}>
            {detailProduct.short_desc}
          </p>
          <p style={{ fontWeight: "500" }}>
            CATEGORY :{" "}
            <span style={{ fontWeight: "200" }}>{detailProduct.category}</span>
          </p>
          <div
            style={{
              border: "1px solid gainsboro",
              width: "fit-content",
            }}
          >
            <span style={{ padding: "5px 20px", fontWeight: "200" }}>
              QUANTITY
            </span>
            <button
              style={{ border: "none", background: "none" }}
              onClick={() => {
                dispatch(countAction.Decrease());
              }}
            >
              <i className="bi bi-caret-left-fill" />
            </button>

            <span>{count}</span>
            <button
              style={{ border: "none", background: "none" }}
              onClick={() => {
                dispatch(countAction.Increase());
              }}
            >
              <i className="bi bi-caret-right-fill" />
            </button>
            <button
              style={{
                padding: "5px 20px",
                color: "white",
                background: "black",
                fontWeight: "200",
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div style={{ marginTop: "6rem" }}>
          <button
            style={{
              padding: "5px 20px",
              color: "white",
              background: "black",
              fontWeight: "200",
            }}
          >
            DESCRIPTION
          </button>
          <p style={{ paddingTop: "2rem" }}>PRODUCT DESCRIPTION</p>
          <ul
            style={{
              whiteSpace: "pre-line",
              fontSize: "15px",
              fontWeight: "100",
            }}
          >
            {detailProduct.long_desc}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
