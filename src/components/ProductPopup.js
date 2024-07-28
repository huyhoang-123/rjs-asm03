import React from "react";
import "./ProductPopup.css";
import { useSelector, useDispatch } from "react-redux";
import { popupAction } from "../store";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
const ProductPopup = (props) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <Modal
      show={() => dispatch(popupAction.SHOW_POPUP())}
      onHide={() => dispatch(popupAction.HIDE_POPUP())}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>{modal}</Modal.Header>

      <Modal.Body>
        {" "}
        <div className="row">
          <div className="col-6">
            <img
              src={props.productDetail.img1}
              style={{ width: "100%", height: "auto" }}
            ></img>
          </div>
          <div className="col-6">
            <h5>{props.productDetail.name}</h5>
            <p>{props.productDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</p>
            <p>{props.productDetail.short_desc}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ProductPopup;
