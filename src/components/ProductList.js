import React, { useState } from "react";
import FetchData from "./FetchData";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./ProductList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { categotyAction } from "../store";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
const ProductList = () => {
  const [productData, setProductData] = useState();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const product = useFetch();
  console.log(product);
  const FetchCategory = (productData) => {
    setProductData(productData);
  };
  const category = useSelector((state) => state.categoryList.category);

  const onChangeSelect = (event) => {
    if (event.target.value === "Default") {
      dispatch(categotyAction.All());
    }
    if (event.target.value === "Iphone") {
      dispatch(categotyAction.Iphone());
    }
    if (event.target.value === "Ipad") {
      dispatch(categotyAction.Ipad());
    }
    if (event.target.value === "Airpod") {
      dispatch(categotyAction.Airpod());
    }
    if (event.target.value === "Watch") {
      dispatch(categotyAction.Watch());
    }
  };

  return (
    <div className="container">
      <FetchData onFetch={FetchCategory} />
      <div className={classes.banner}>
        <h3>Shop</h3>
        <span>Shop</span>
      </div>
      <div className="row ">
        <div className="col-3">
          <ul className={classes.list} style={{ paddingLeft: "0" }}>
            <li className={classes.header}>APPLE</li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.All());
              }}
            >
              ALL
            </li>

            <li className={classes.category}>IPHONE & MAC</li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Iphone());
              }}
            >
              Iphone
            </li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Ipad());
              }}
            >
              Ipad
            </li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Macbook());
              }}
            >
              Macbook
            </li>

            <li className={classes.category}>WIRELESS</li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Airpod());
              }}
            >
              Airpod
            </li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Watch());
              }}
            >
              Watch
            </li>
            <li className={classes.category}>OTHER</li>

            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Mouse());
              }}
            >
              Mouse
            </li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Keyboard());
              }}
            >
              Keyboard
            </li>
            <li
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={() => {
                dispatch(categotyAction.Other());
              }}
            >
              Other
            </li>
          </ul>
        </div>
        <div className="col-9">
          <div className="row">
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <input
                placeholder="Enter Search Here!"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <select name="" onClick={(e) => onChangeSelect(e)}>
                <option value="Default">Default</option>
                <option value="Iphone">Iphone</option>
                <option value="Ipad"> Ipad</option>
                <option value="Airpod">Airpod</option>
                <option value="Watch"> Watch</option>
              </select>
            </div>

            {search === ""
              ? productData
                  ?.filter((item) => {
                    return category === "" ? item : item.category === category;
                  })
                  .map((list, id) => {
                    // params.productId = list._id.$oid;
                    return (
                      <div
                        key={id}
                        className="col-4"
                        onClick={() => {
                          navigate(`/detail/${list._id.$oid}`);
                        }}
                      >
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
                        <p style={{ textAlign: "center" }}>
                          {list.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                          VND
                        </p>
                      </div>
                    );
                  })
              : productData
                  .filter((item) => item.name.toLowerCase().includes(search))
                  .map((list, id) => {
                    console.log(list);
                    return (
                      <div key={id} className="col-4">
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
                  })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
