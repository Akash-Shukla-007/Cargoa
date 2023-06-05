import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { config } from "../config";
import axios from "axios";

function TransporterModal({ details, companyName }) {
  const data = useLocation();
  const [price, setPrice] = useState("");
  const [reply, setReply] = useState("");
  let to = details.from;
  let orderId = details.orderId;

  const sendData = async () => {
    if (!price) return;
    try {
      const response = await axios.post(
        `${config.BASE_URL}/reply`,
        { orderId, to, companyName, price, reply },
        config.configs
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
              <p>From : {details.from}</p>
              <p>To : {details.to}</p>
              <p>Address : {details.address}</p>
              <p>Quantity : {details.quantity}</p>
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Reply Message (optional)"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />

              <button className="send_button" onClick={sendData}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransporterModal;
