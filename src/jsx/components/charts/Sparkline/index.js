import React, { useState, Fragment } from "react";

import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Sparklines,
  SparklinesLine,
  SparklinesBars,
  SparklinesSpots,
  SparklinesReferenceLine,
} from "react-sparklines";
import WAValidator from "wallet-address-validator";
import web3 from "web3";
import swalMessage from "@sweetalert/with-react";
import swal from "sweetalert";
import PageTitle from "../../../layouts/PageTitle";


const sampleData = [64, 24, 40, 76, 19, 0, 2, 46, 65, 12, 10, 6, 15, 57, 35, 81,
  86, 12, 12, 21, 53, 44, 2, 1, 58, 9, 61, 64, 42, 92, 58, 9, 34, 47, 89, 52, 3, 69, 33, 2, 60, 71,
  71, 22, 65, 70, 31, 81, 36, 89,
];


function ChartSparkline() {
  const [valid, setValid] = useState(false);
  const [address, setAddress] = useState('');
  const WalletAddressVaidation = (key) => {
    if (key === 'Enter') {
      const valid = web3.utils.isAddress(address);
      if (valid) {
        setValid(true);
        console.log("Valid!");
      }
      else {
        setValid(false);
        console.log("Invalid!");
      }
    }
    else console.log("nope");
  }

  return (
    <>
      {/* <PageTitle motherMenu="Charts" activeMenu="Sparkline" /> */}
      <h1 className="justify-content-center d-flex">Wallet Analysis</h1>
      <div style={{ height: '50px' }}></div>
      <div className="card">
        <div className="card-body align-items-center justify-content-between">
          <div className="input-group search-area w-100">
            <input type="text" className="form-control border-end-0 border-warning display-6 border-yellow height-75 h2 fontsize-25" placeholder="Enter Wallet Address" onChange={(event) => setAddress(event.target.value)} onKeyDown={(e) => WalletAddressVaidation(e.key)} />
            <span className="input-group-text bg-transparent border-warning border-yellow height-75 h2 "><a href="#" onClick={() => WalletAddressVaidation("Enter")}><i className="flaticon-381-search-2 fontsize-20"></i></a></span>
          </div>
          <div>
            {valid ? (
              <span></span>
            ) : (<span className="text-danger h4">Wrong Wallet Address!</span>)}
          </div>
        </div>

      </div>
    </>
  );
}

export default ChartSparkline;
