import React, { useState, Fragment } from "react";

import { Row, Col, Card } from "react-bootstrap";
import { Audio, BallTriangle } from 'react-loader-spinner';
import AmLineChart from "../Amcharts/linechart";
import moment from 'moment';
import axios from 'axios';
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
  const [loading, setLoading] = useState(false);
  const [totalAccountValue, setTotalAccountValue] = useState([]);
  const [totalEtherValue, setTotalEtherValue] = useState([]);
  const [totalEtherDate, setTotalEtherDate] = useState([]);
  let tradeValue = [], tradeDate = [];

  const fetchNormalTxEtherscan = async () => {
    const response = await axios.get('https://api.etherscan.io/api?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=D37M8FCGG3MGHKWG47W8QDZ9128WGY2B2P');
    const data = response.data.result;
    let value = 0, checkedBefore = false, checkedAfter = false;
    const vvv = await fetchInternalTxEtherscan();
    let internalTD = [], internalTV = [], internalTimeStamps = [];
    internalTD = vvv[1]; internalTV = vvv[0], internalTimeStamps = vvv[2];
    data.forEach(function (e, dIndex) {
      if (!checkedBefore) { // Add internal Txs occured before normal Txs
        internalTimeStamps.forEach(function (v, index) {
          if (Number(v) < Number(e.timeStamp)) {
            value += Number(internalTV[index]);
            tradeValue.push((value / Math.pow(10, 18)).toFixed(4));
            tradeDate.push(internalTD[index]);
          }
        });
        checkedBefore = true;
      }
      if (e.from.toLowerCase() == address.toLowerCase()) {
        value -= Number(e.value);
        value -= Number(e.gasPrice) * Number(e.gasUsed);
        tradeValue.push((value / Math.pow(10, 18)).toFixed(4)); // Add tx value to array
        tradeDate.push(moment.unix(Number(e.timeStamp)).format("YYYY-MM-DD"));
      }
      if (e.to.toLowerCase() == address.toLowerCase()) {
        value += Number(e.value);
        tradeValue.push((value / Math.pow(10, 18)).toFixed(4));
        tradeDate.push(moment.unix(Number(e.timeStamp)).format("YYYY-MM-DD"));
      }

      internalTimeStamps.forEach(function (val, index) { // Add internal Txs between normal txs timestamp
        if (dIndex < data.length - 1) {
          if (Number(e.timeStamp) < Number(val) && Number(val) <= Number(data[dIndex + 1].timeStamp)) {
            value += Number(internalTV[index]);
            internalval += Number(internalTV[index]);
            tradeValue.push((value / Math.pow(10, 18)).toFixed(4));
            tradeDate.push(internalTD[index]);
          }
        }
      })

    });

    if (!checkedAfter) { // Add internal Txs occured after normal Txs
      internalTimeStamps.forEach(function (v, index) {
        if (Number(v) > Number(data[data.length - 1].timeStamp)) {
          value += Number(internalTV[index]);
          internalval += Number(internalTV[index]);
          tradeValue.push((value / Math.pow(10, 18)).toFixed(4));
          tradeDate.push(internalTD[index]);
        }
      });
      checkedAfter = true;
    }

    let prev = 0;
    let td = [];
    var tv = tradeDate.map((el, index) => {
      if (index !== tradeDate.length) {
        if (el !== tradeDate[index + 1]) {
          td.push(el);
          // const result = { [el]: Math.max.apply(null, tradeValue.slice(prev, index + 1)) };
          const result = Math.max.apply(null, tradeValue.slice(prev, index + 1));
          prev = index + 1;
          return result;
        }
        else return false;
      }
      else return false;
    }).filter((el) => el);

    setTotalEtherValue(tv);
    setTotalEtherDate(td);
    setSearchResult(true);
    setLoading(false);
  }

  const fetchInternalTxEtherscan = async () => {
    const receive = await axios.get('https://api.etherscan.io/api?module=account&action=txlistinternal&address=' + address + '&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=D37M8FCGG3MGHKWG47W8QDZ9128WGY2B2P');
    let value = 0, tValue = [], tDate = [], timeStamps = [];
    if (receive.data.message == "OK") {
      var data = receive.data.result;
    }
    else {
      console.log("No internal Data");
    }
    data.forEach(function (item) {
      // value += Number(item.value);
      // tValue.push((value / Math.pow(10, 18)).toFixed(4));
      tValue.push(Number(item.value));
      tDate.push(moment.unix(Number(item.timeStamp)).format("YYYY-MM-DD"));
      timeStamps.push(Number(item.timeStamp));
    });
    return [tValue, tDate, timeStamps];
  }

  const combineNormalAndInternalTx = (nTV, nTD, iTV, iTD) => {
    let rTV = [], rTD = [], swap = [];
    rTV = nTV.concat(iTV);
    rTD = nTD.concat(iTD);
    rTD.forEach(function (item, index) {
      let value = 0;
      rTD.forEach(function (e, iindex) {
        if (item == e) {
          value += Number(rTV[iindex]);
        }
      })
      swap.push({ value, item });
    });
    swap.sort(function (a, b) {
      var dateA = new Date(a.item);
      var dateB = new Date(b.item);
      return dateA - dateB;
    });
    let finalTV = [], finalTD = [];
    for (let i = 0; i < swap.length; i++) {
      finalTV.push(swap[i].value);
      finalTD.push(swap[i].item);
    }

    setTotalEtherValue(finalTV);
    setTotalEtherDate(finalTD);

    setSearchResult(true);
  }
  const fetchOpenseaAPI = async () => {

  }
  // const convert = (a, b) => {
  //   let prev = 0;
  //   return b.map((el, index) => {
  //     if (index !== b.length) {
  //       if (el !== b[index + 1]) {
  //         const result = { [el]: Math.max.apply(null, a.slice(prev, index + 1)) };
  //         prev = index + 1;
  //         return result;
  //       }
  //       else return false;
  //     }
  //     else return false;
  //   }).filter((el) => el);
  // }


  const WalletAddressVaidation = (key) => {
    if (key === 'Enter') {
      const validAdd = web3.utils.isAddress(address);
      if (validAdd) {
        setValid(true);
        console.log("Valid!");
        setLoading(true);
        fetchNormalTxEtherscan();
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
      {loading ? (<div className="justify-content-center d-flex">
        <BallTriangle color="#eeb417" height={80} width={80} />
      </div>) : <div></div>}
      {searchResult ? (<h1>{mockupSearchResult.username}</h1>) : (<span></span>)}

      {searchResult ? (
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <AmLineChart id="TotalEtherValue" data={totalEtherValue} date={totalEtherDate} />
                {/* <ApexLine data={totalEtherValue} /> */}
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total Account Value</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <ApexLine3 data={totalEtherValue} date={totalEtherDate} />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total ETH Value</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                {/* <ApexLine /> */}
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Total NFT Value</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                {/* <ApexLine3 /> */}
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
