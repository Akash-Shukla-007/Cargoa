import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { config } from "../config";
import axios from "axios";

function List({ details, companyName }) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Reply to {details.orderId}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Order Id : {details.orderId}</p>
              <p>From : {details.from}</p>
              <p>To : {details.to}</p>
              <p>Price : {details.price}</p>
              <p>Reply Message : {details.reply}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
