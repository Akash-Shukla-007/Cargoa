import React, { useState } from "react";
import "../../css/App.css";
import { Link, useNavigate } from "react-router-dom";
import ManufatcureAuth from "../../components/ManufatcureAuth";
import TransporterAuth from "../../components/TransporterAuth";

function Auth() {
  const [viewManufacturer, setViewManufacturer] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="root_auth_container">
      <h1 className="register_head">Registration</h1>
      <div className="role_container">
        <div className="button_container">
          <button
            className="auth_button "
            onClick={() => setViewManufacturer(true)}
          >
            As Manufacturer
          </button>
          <button
            className="auth_button transporter"
            onClick={() => setViewManufacturer(false)}
          >
            As Transporter
          </button>
        </div>
        {viewManufacturer && (
          <ManufatcureAuth manufacturerRole={viewManufacturer} />
        )}
        {!viewManufacturer && (
          <TransporterAuth manufacturerRole={viewManufacturer} />
        )}
      </div>
    </div>
  );
}

export default Auth;
