import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Category.module.css";
import "bootstrap/dist/css/bootstrap.css";
let X = {};
function CategoryShop() {
  const [dataList, setDataList] = useState();
  const [ProductList, setProductList] = useState();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  function FetchCategory() {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setDataList(json);
      });
  }
  useEffect(() => {
    FetchCategory();
  }, []);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (DetailList) => {
    setShow(true);
    setProductList(DetailList);
    X = DetailList;
  };

  return (
    <div className="container">
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
              <div className="col-3" onClick={() => handleShow(list)}>
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
                <p style={{ textAlign: "center" }}>{list.price} VND</p>
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

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
              centered
      >
        <Modal.Header closeButton style={{border:"none"}}>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="row">
            <div className="col-6">
              <img
                src={X?.img1}
                style={{ width: "100%", height: "auto" }}
              ></img>
            </div>
            <div className="col-6">
              <h5>{X?.name}</h5>
              <p>{X?.price} VND</p>
              <p>{X?.short_desc}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{border:'none'}}>
        
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CategoryShop;
