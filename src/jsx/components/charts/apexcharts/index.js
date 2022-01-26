import React from "react";
import loadable from "@loadable/component";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import pMinDelay from "p-min-delay";
import discord4 from './../../../../images/discord4.png';
import discord3 from './../../../../images/discord3.png';

import PageTitle from "../../../layouts/PageTitle";
import AmLineChart from "../Amcharts/linechart";
const ApexBar2 = loadable(() => pMinDelay(import("./Bar2"), 1000));
const ApexBar3 = loadable(() => pMinDelay(import("./Bar3"), 1000));
const ApexRedialBar = loadable(() => pMinDelay(import("./RadialBar"), 1000));
const ApexLine = loadable(() => pMinDelay(import("./Line5"), 1000));
const ApexLine3 = loadable(() => pMinDelay(import("./Line3"), 1000));
const ApexLine4 = loadable(() => pMinDelay(import("./Line4"), 1000));
const ApexPie = loadable(() => pMinDelay(import("./Pie4"), 1000));
const ApexPie5 = loadable(() => pMinDelay(import("./Pie5"), 1000));

function ApexChart() {
  return (
    <div className="h-80">
      {/* <PageTitle motherMenu="Charts" activeMenu="ApexChart" /> */}
      <div className="d-flex ">
        <h1>Cool Cat NFT </h1>
        <div className="ms-lg-4">
          <a href="https://discord.gg/tPxcEwsR">
            <img src={discord3} alt="" className="rounded" width="40"></img>
          </a>
          <a href="https://opensea.io/" className="ms-lg-3">
            <img src="https://opensea.io/static/images/logos/opensea.svg" width="40"></img>
          </a>
        </div>
      </div>
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Body>
              {/* <ApexLine3 /> */}
              <AmLineChart id="MCAP"></AmLineChart>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <h4 className="card-title">MCAP</h4>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Body>
              <AmLineChart id="Listing"></AmLineChart>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <h4 className="card-title">Listing</h4>
            </Card.Footer>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Body>
              <AmLineChart id="Holders"></AmLineChart>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <h4 className="card-title">Holders</h4>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Body>
              {/* <ApexLine3 /> */}
              <AmLineChart id="Floor"></AmLineChart>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <h4 className="card-title">Floor Price</h4>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ApexChart;
