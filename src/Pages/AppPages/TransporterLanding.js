import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import List from "../../components/List";
import { Modal } from "bootstrap";
import TransporterModal from "../../components/TransporterModal";
import { useLocation, useNavigate } from "react-router-dom";
import { config } from "../../config";
import axios from "axios";

function TransporterLanding() {
  const data = useLocation();
  const companyName = data.state.companyName;
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState({});

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${config.BASE_URL}/tfetch`,
        { companyName },
        config.configs
      );
      // console.log(response.data.Order);
      setOrders(response.data.Order);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const searchHandler = () => {};
  return (
    <div className="root_auth_container">
      <h1 className="register_head">Transporter</h1>
      <div className="box_container">
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
                  data-bs-target="#exampleModal"
                  onClick={() => setDetails(item)}
                >
                  Order Id : {item.orderId}
                </button>
              </>
            );
          })}
          <div className="modal_container_abs">
            <TransporterModal
              details={details}
              companyName={data.state.companyName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransporterLanding;
