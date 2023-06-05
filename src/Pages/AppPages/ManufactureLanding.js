import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import List from "../../components/List";
import { Modal } from "bootstrap";
import Modaler from "../../components/ManufactureModal";
import axios from "axios";
import { config } from "../../config";
import { useLocation } from "react-router-dom";

function ManufactureLanding() {
  const data = useLocation();
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [orders, setOrders] = useState([]);
  const [details, setDetails] = useState({});

  let email = data.state.email;
  console.log(email);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${config.BASE_URL}/mfetch`,
        { email },
        config.configs
      );
      // console.log(response.data);
      setOrders(response.data.Order);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const searchHandler = () => {
    if (!search) return;
    console.log("search");
  };
  return (
    <div className="root_auth_container">
      <h1 className="register_head">Manufacturer</h1>
      <div className="box_container">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add New
        </button>
        <div className="modal_container_abs">
          <Modaler address={data.state.address} />
        </div>

        <div className="box_indep_cont">
          <div className="search_container">
            <input
              type="text"
              placeholder="Search"
              className="input_cont"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="input_cont"
              onClick={searchHandler}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineSearch size={25} />
            </button>
          </div>

          {orders.map((item, index) => {
            return (
              <>
                <button
                  key={index}
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={() => setDetails(item)}
                >
                  Order Id : {item.orderId}
                </button>
              </>
            );
          })}
          <div className="modal_container_abs">
            {console.log(details)}
            <List details={details} companyName={data.state.companyName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManufactureLanding;
