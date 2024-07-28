import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import React, { useState } from "react";
import "./Category.module.css";
import "bootstrap/dist/css/bootstrap.css";
import FetchData from "./FetchData";
import { useSelector, useDispatch } from "react-redux";
import { popupAction } from "../store";
import ProductPopup from "./ProductPopup";

function CategoryShop() {
  const [dataList, setDataList] = useState();
  const [popupProduct, setPopupProduct] = useState();
  const dispatch = useDispatch();

  const FetchCategory = (productData) => {
    setDataList(productData);
  };
  console.log(dataList);
  const showModal = useSelector((state) => state.popup.modal);

  const handleShow = (DetailList) => {
    console.log(DetailList);
    dispatch(popupAction.SHOW_POPUP());
    setPopupProduct(DetailList);
    console.log(popupProduct);
  };

  return (
    <div className="container">
      <FetchData onFetch={FetchCategory} />
      <div className={classes.banner}>
        <p className={classes.fixp}>NEW INSPIRATION 2020</p>
        <p style={{ marginLeft: "4rem", fontSize: "2rem" }}>
          20% OFF ON NEW <br />
          SEASON
        </p>
        <button className={classes.fbtn}>
          <NavLink
            to="/shop"
            style={{
              color: "white",
              fontStyle: "italic",
              textDecoration: "none",
            }}
          >
            Browse colections
          </NavLink>
        </button>
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            margin: "30px 0 5px",
            fontWeight: "300",
          }}
        >
          CAREFULLY CREATED COLLECTIONS
        </p>
        <h4 style={{ textAlign: "center", padding: "0" }}>
          BROWSE OUR CATEGORIES
        </h4>
      </div>
      <div className={`row `}>
        <div className={`col-6 ${classes.imghover}`}>
          <NavLink to="/shop">
            {" "}
            <img
              src=".\images\product_1.png"
              style={{ width: "100%", padding: "20px 0 0" }}
            ></img>
          </NavLink>
        </div>
        <div className={`col-6 ${classes.imghover}`}>
          <NavLink to="/shop">
            {" "}
            <img
              src=".\images\product_2.png"
              style={{ width: "100%", padding: "20px 0 0" }}
            ></img>
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className={`col-4 ${classes.imghover}`}>
          <NavLink to="/shop">
            {" "}
            <img
              src=".\images\product_3.png"
              style={{ width: "100%", padding: "20px 0 0" }}
            ></img>
          </NavLink>
        </div>
        <div className={`col-4 ${classes.imghover}`}>
          <NavLink to="/shop">
            {" "}
            <img
              src=".\images\product_4.png"
              style={{ width: "100%", padding: "20px 0 0" }}
            ></img>
          </NavLink>
        </div>
        <div className={`col-4 ${classes.imghover}`}>
          <NavLink to="/shop">
            {" "}
            <img
              src=".\images\product_5.png"
              style={{ width: "100%", padding: "20px 0 0" }}
            ></img>
          </NavLink>
        </div>
      </div>
      <div>
        <p style={{ margin: "30px 0 5px", fontWeight: "300" }}>
          MADE THE HARD WAY
        </p>
        <h5 style={{ padding: "0" }}>TOP TRENDING PRODUCTS</h5>
      </div>
      <div className="row">
        {dataList?.length !== 0 ? (
          dataList?.map((list, id) => {
            return (
              <div key={id} className="col-3" onClick={() => handleShow(list)}>
                <img
                  src={list.img1}
                  style={{ width: "100%", padding: "20px 0 0" }}
                ></img>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                    margin: "10px 0 10px",
                    cursor: "pointer",
                  }}
                >
                  {list.name}
                </p>
                <p style={{ textAlign: "center" }}>{list.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</p>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          margin: "30px 0",
        }}
      >
        <div className="row">
          <div
            className="col-4"
            style={{ padding: "30px", textAlign: "center" }}
          >
            <h5>FREE SHIPPING</h5>
            <p style={{ margin: "0" }}>Free shipping worldwide</p>
          </div>
          <div
            className="col-4"
            style={{ padding: "30px", textAlign: "center" }}
          >
            {" "}
            <h5>24 X 7 SERVICE</h5>
            <p style={{ margin: "0" }}>Free shipping worldwide</p>
          </div>
          <div
            className="col-4"
            style={{ padding: "30px", textAlign: "center" }}
          >
            {" "}
            <h5>FESTIVAL OFFER</h5>
            <p style={{ margin: "0" }}>Free shipping worldwide</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ padding: "30px 0 50px" }}>
        <div className="col-6">
          <h5>LET'S BE FRIENDS!</h5>
          <p style={{ fontWeight: "300" }}>
            Nisi nisi tempor consequat laboris nisi
          </p>
        </div>
        <div className="col-6">
          <form style={{ display: "flex", width: "100%" }}>
            <input
              placeholder="Enter your email address"
              style={{ padding: "10px 20px", width: "100%" }}
            ></input>
            <button
              style={{
                padding: "10px 30px",
                color: "white",
                backgroundColor: "#383838",
              }}
            >
              Subcribe
            </button>
          </form>
        </div>
      </div>
      {popupProduct && showModal === true && (
        <ProductPopup productDetail={popupProduct} />
      )}
    </div>
  );
}

export default CategoryShop;
