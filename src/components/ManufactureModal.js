import React, { useEffect, useState } from "react";
import orderIdLogic from "./helpers/orderIdLogic";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { config } from "../config";
import orderLogic from "./helpers/orderIdLogic";

function Modal({ address }) {
  const [quantity, setQuantity] = useState("");
  const [selectTransporter, setSelecttransporter] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const sendData = async () => {
    const orderId = orderIdLogic();

    if (!quantity || !selectTransporter || !to || !from) return;
    try {
      const response = await axios.post(
        `${config.BASE_URL}/new`,
        { orderId, to, from, address, quantity, selectTransporter },
        config.configs
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              New Request
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Order Id (Auto-Generated)"
              disabled
            />
            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option name="one">1 ton</option>
              <option name="two">2 ton</option>
              <option name="three">3 ton</option>
            </select>
            <input type="text" placeholder="Address" value={address} disabled />
            <select
              value={selectTransporter}
              onChange={(e) => setSelecttransporter(e.target.value)}
            >
              <option name="one">Ekart</option>
              <option name="two">Delhivery</option>
              <option name="three">Bluedart</option>
            </select>
            <button className="send_button" onClick={sendData}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
