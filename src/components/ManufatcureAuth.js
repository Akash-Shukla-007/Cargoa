import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../config";

function ManufatcureAuth({ manufacturerRole }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const sendData = async () => {
    if (!(email || name || address)) return;

    try {
      const response = await axios.post(
        `${config.BASE_URL}`,
        { name, email, address, manufacturerRole },
        config.configs
      );
      navigate("/manu-landing", { state: { email, address } });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="input_form">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={sendData} className="send_button">
        Send
      </button>
    </div>
  );
}

export default ManufatcureAuth;
