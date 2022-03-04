import React, { useState, Fragment } from "react";
import loadable from "@loadable/component";
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Modal, ListGroup } from "react-bootstrap";

import pMinDelay from "p-min-delay";
import discord4 from './../../../../images/discord4.png';
import discord3 from './../../../../images/discord3.png';

import moment from 'moment';
import PageTitle from "../../../layouts/PageTitle";
import AmLineChart from "../Amcharts/linechart";
import { Audio, BallTriangle, TailSpin, Oval } from 'react-loader-spinner';
import axios from 'axios';
const ApexBar2 = loadable(() => pMinDelay(import("./Bar2"), 1000));
const ApexBar3 = loadable(() => pMinDelay(import("./Bar3"), 1000));
const ApexRedialBar = loadable(() => pMinDelay(import("./RadialBar"), 1000));
const ApexLine = loadable(() => pMinDelay(import("./Line5"), 1000));
const ApexLine3 = loadable(() => pMinDelay(import("./Line3"), 1000));
const ApexLine4 = loadable(() => pMinDelay(import("./Line4"), 1000));
const ApexPie = loadable(() => pMinDelay(import("./Pie4"), 1000));
const ApexPie5 = loadable(() => pMinDelay(import("./Pie5"), 1000));

function ApexChart() {

  const [loading, setLoading] = useState(false);
  const [addOptionText, setAddOptionText] = useState('');
  const [searched, setSearched] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [largeModal, setLargeModal] = useState(true);
  const [collectionData, setCollectionData] = useState([]);
  const [mcap, setMcap] = useState([]);
  const [mcapDate, setMcapDate] = useState([]);
  const [holders, setHolders] = useState([]);
  const [holdersDate, setHoldersDate] = useState([]);
  const [listingDate, setListingDate] = useState([]);
  const [listing, setListing] = useState([]);
  const [floor, setFloor] = useState([]);
  const [floorDate, setFloorDate] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const searchCollectionNames = async () => {
    setLoading(true);
    setDataLoaded(false);
    if (addOptionText != '') {
      const response = await axios.get('https://exodia.io/api/search/' + addOptionText);
      const data = response.data.collections;
      console.log(data);
      setListItem(data);
      setLoading(false);
      setSearched(true);
    }
  }

  const onAddOptionText = (val) => {
    setAddOptionText(val);
  }

  const onSelectSearchValue = (val) => {
    setAddOptionText(val.name);
    console.log(val);
    fetchSingleCollection(val);
    setSearched(false);
    setLargeModal(false)
  }

  const fetchSingleCollection = async (value) => {
    const response = await axios.get('https://api.opensea.io/api/v1/collection/' + value.slug);
    if (response) {
      const data = response.data.collection;
      setCollectionData(response.data.collection);
      const today = moment(new Date()).format("DD/MM/YYYY");
      const mcapV = []; mcapV.push(data.stats.market_cap); setMcap(mcapV);
      console.log(mcapV);
      const mcapD = []; mcapD.push(today); setMcapDate(mcapD);
      console.log(mcapD);
      const owners = []; owners.push(data.stats.num_owners); setHolders(owners);
      const ownerD = []; ownerD.push(today); setHoldersDate(ownerD);
      const volume = []; /*volume.push(data.stats.thirty_day_volume); volume.push(data.stats.seven_day_volume);*/ volume.push(data.stats.one_day_volume); setListing(volume);
      const volumeD = []; volumeD.push(today); setListingDate(volumeD);
      const floorV = []; floorV.push(data.stats.floor_price); setFloor(floorV);
      const floorD = []; floorD.push(today); setFloorDate(floorD);
      setDataLoaded(true);
      setFloorDate(ownerD);
    }
    console.log(response.data.collection);
  }

  return (
    <div className="h-80">
      {/* <PageTitle motherMenu="Charts" activeMenu="ApexChart" /> */}
      <Modal
        className="fade bd-example-modal-lg"
        show={largeModal}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>Select an NFT Collection</Modal.Title>
          <Button
            variant=""
            className="btn-close"
            onClick={() => setLargeModal(false)}
          >
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group search-area mt-4 position-relative">
            <input type="text" className="form-control" placeholder="Search Here" value={addOptionText} onChange={(e) => onAddOptionText(e.target.value)}></input>
            <span className="input-group-text">
              <a href="#" onClick={() => searchCollectionNames()}>
                <i className="flaticon-381-search-2"></i>
              </a>
            </span>
          </div>

          {loading ? (<div className="justify-content-center d-flex pt-2">
            <Oval color="#eeb417" height={50} width={50} />
          </div>) : <div></div>}
          {searched ?
            <Col>
              <Card>
                <div className="basic-list-group">
                  <ListGroup>
                    {listItem.map((list, i) => (
                      <Fragment key={i}>
                        <ListGroup.Item action className="text-white fs-5" onClick={() => onSelectSearchValue(list)}>
                          <div>
                            <img src={list.imageUrl} width={50}></img>
                            <span className="ps-5">{list.name}</span>
                          </div>
                        </ListGroup.Item>
                      </Fragment>
                    ))}
                  </ListGroup>
                </div>
              </Card>
            </Col> : <div></div>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger light"
            onClick={() => setLargeModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h1>{addOptionText}</h1>
          <div className="ms-lg-4">
            <a href={collectionData.discord_url}>
              <img src={discord3} alt="" className="rounded" width="40"></img>
            </a>
            <a href={'https://opensea.io/collection/' + collectionData.slug} className="ms-lg-3">
              <img src="https://opensea.io/static/images/logos/opensea.svg" width="40"></img>
            </a>
          </div>
        </div>

        <Button
          variant="primary"
          className="mb-2 me-2"
          onClick={() => setLargeModal(true)}
        >
          <i className="flaticon-381-search-2"></i>
        </Button>
      </div>
      {dataLoaded ?
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                {/* <ApexLine3 /> */}
                <AmLineChart id="MCAP" data={mcap} date={mcapDate}></AmLineChart>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">MCAP</h4>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <AmLineChart id="Listing" data={listing} date={listingDate}></AmLineChart>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Listing</h4>
              </Card.Footer>
            </Card>
          </Col>

          <Col xl={6} lg={6}>
            <Card>
              <Card.Body>
                <AmLineChart id="Holders" data={holders} date={holdersDate}></AmLineChart>
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
                <AmLineChart id="Floor" data={floor} date={floorDate}></AmLineChart>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <h4 className="card-title">Floor Price</h4>
              </Card.Footer>
            </Card>
          </Col>
        </Row> : <div />}
    </div>
  );
}

export default ApexChart;
