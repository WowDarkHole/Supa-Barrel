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
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import SortingTable from "../../table/SortingTable/SortingTable";
import ActivityTable from "../../table/SortingTable/ActivityTable";
const ApexBar2 = loadable(() => pMinDelay(import("../apexcharts/Bar2"), 1000));
const ApexBar3 = loadable(() => pMinDelay(import("../apexcharts/Bar3"), 1000));
const ApexRedialBar = loadable(() => pMinDelay(import("../apexcharts/RadialBar"), 1000));
const ApexLine = loadable(() => pMinDelay(import("../apexcharts/Line5"), 1000));
const ApexLine3 = loadable(() => pMinDelay(import("../apexcharts/Line3"), 1000));
const ApexLine4 = loadable(() => pMinDelay(import("../apexcharts/Line4"), 1000));

const mockupSearchResult = {
  username: "UserNameHere",
  totalAccVal: {
    data: [1, 2, 3, 4, 5, 56]
  },
  totalEthVal: {
    data: [12, 31, 23, 123, 4, 34, 5, 57, 67, 568, 678, 567]
  },
  totalNftVal: {
    data: [345, 56, 657, 456, 456, 2, 23, 4, 6, 567, 58, 34, 93]
  },
  totalProfit: {
    data: [4, 2, 4, 5, 346, 67, 457, 647, 84, 56, 32, 45, 234]
  },
  time: ['2019-04-18T19:57:30.350275', '2019-04-19T19:57:30.350275', '2019-04-20T19:57:30.350275', '2019-04-21T19:57:30.350275', '2019-04-22T19:57:30.350275', '2019-04-23T19:57:30.350275',]
}
function ChartSparkline() {
  const [valid, setValid] = useState(true);
  const [address, setAddress] = useState('');
  const [searchResult, setSearchResult] = useState(false);
  const [tableNum, setTableNum] = useState(1);
  const WalletAddressVaidation = (key) => {
    if (key === 'Enter') {
      const valid = web3.utils.isAddress(address);
      if (valid) {
        setValid(true);
        setSearchResult(true);
        console.log("Valid!");
      }
      else {
        setValid(false);
        setSearchResult(false);
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
      {searchResult ? (<h1>{mockupSearchResult.username}</h1>) : (<span></span>)}

      {searchResult ? (
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <ApexLine />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total Account Value</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <ApexLine3 />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total ETH Value</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <ApexLine />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total NFT Value</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <ApexLine3 />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total Profits</h4>
              </Card.Footer>
            </Card>
          </Col>
        </Row>) : (
        <span></span>
      )}
      {searchResult ? (
        <div className="d-flex mb-4">
          <button className="me-2 btn btn-outline-primary" onClick={() => setTableNum(1)}>Collections</button>
          <button className="me-2 btn btn-outline-success" onClick={() => setTableNum(2)}>Activity</button>
        </div>
      ) : (<span></span>)}
      {searchResult ? (
        tableNum == 1 ? (
          <SortingTable></SortingTable>) : (<ActivityTable></ActivityTable>)
      ) : (<span></span>)}
    </>
  );
}

export default ChartSparkline;
