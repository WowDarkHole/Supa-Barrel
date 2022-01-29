import React, { Fragment, useState, useEffect, useContext } from "react";
import Products from "./Products";
import Select from "react-select";
import { ThemeContext } from "../../../../../context/ThemeContext";

/// Data
import productData from "../productData";
import PageTitle from "../../../../layouts/PageTitle";
import nftImage from "../../../../../images/nfts/m1.png";
import { Row, Card, Nav, Col, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

const ProductGrid = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   const collectionName = "Bored NFT";
   const { navigationHader, openMenuToggle, background } = useContext(
      ThemeContext
   );
   // useEffect(() => {
   //    console.log("!!!!!!");
   //    openMenuToggle();
   // }, [])

   const active = 1;
   let items = [];

   for (let number = 1; number <= 4; number++) {
      items.push(
         <Pagination.Item key={number} active={number === active}>
            {number}
         </Pagination.Item>
      );
   }
   const pag = (size, gutter, variant, bg, circle) => (
      <Pagination
         size={size}
         className={`mt-4  ${gutter ? "pagination-gutter" : ""} ${variant && `pagination-${variant}`
            } ${!bg && "no-bg"} ${circle && "pagination-circle"}`}
      >
         <li className="page-item page-indicator">
            <Link className="page-link" to="#">
               <i className="la la-angle-left" />
            </Link>
         </li>
         {items}
         <li className="page-item page-indicator">
            <Link className="page-link" to="#">
               <i className="la la-angle-right" />
            </Link>
         </li>
      </Pagination>
   );

   return (
      <Fragment>
         {/* <PageTitle activeMenu="Blank" motherMenu="Layout" /> */}
         {/* <button onClick={() => { openMenuToggle(); console.log("clicked") }}>
            <span>nav</span>
         </button> */}
         <div className="d-flex">
            <div className="col-lg-2 me-4 pt-5">
               <div className="input-group mt-5 ">
                  <input type="text" className="form-control height30" placeholder="ID..." />

                  <button className="btn btn-primary p-1 btn-sm" type="button">
                     Lookup
                  </button>

               </div>
               <div className="d-flex align-items-center flex-column mt-3">
                  <h3>Item Filters</h3>
                  <h5>Listing Type</h5>
                  <div className="d-flex justify-content-between">
                     <button className="btn btn-dark btn-xs me-2">Buy Now</button>
                     <button className="btn btn-dark btn-xs">Buy Now</button>
                  </div>
                  <h5 className="mt-3">Price</h5>
                  <h6>(Buy Now Only)</h6>
                  <div className="d-flex justify-content-between align-items-center">
                     <input className="form-control height-30" placeholder="Min ETH"></input>
                     <span className="height-1 border border-1 width-10 border-white mx-2"></span>
                     <input className="form-control height-30" placeholder="Min ETH"></input>
                  </div>
                  <button className="btn btn-primary btn-sm width-100 mt-3"><h5 className="m-0">Apply</h5></button>
                  <h5 className="mt-3">Rarity</h5>
                  <div className="d-flex justify-content-between align-items-center">
                     <input className="form-control height-30" placeholder="Min Rank #"></input>
                     <span className="height-1 border border-1 width-10 border-white mx-2"></span>
                     <input className="form-control height-30" placeholder="Max Rank #"></input>
                  </div>
                  <button className="btn btn-primary btn-sm width-100 mt-3"><h5 className="m-0">Apply</h5></button>
                  <div className="d-flex justify-content-between mt-3">
                     <button className="btn btn-primary btn-xs me-2">Collapse All</button>
                     <button className="btn btn-primary btn-xs">Expand All</button>
                  </div>
               </div>
               <div className="mt-3">
                  <h4>Meta</h4>
                  <div className="divider"></div>
                  <div className="form-group mb-3">
                     <label>Trait Count</label>
                     <select
                        defaultValue={"option"}
                        className="form-control height-30"
                        id="sel1"
                     >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                     </select>
                  </div>
               </div>
               <div className="mt-3">
                  <h4>Traits</h4>
                  <div className="divider"></div>
                  <div className="form-group mb-3">
                     <label>Background</label>
                     <select
                        defaultValue={"option"}
                        className="form-control height-30"
                        id="sel2"
                     >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                     </select>
                  </div>
                  <div className="form-group mb-3">
                     <label>Fur</label>
                     <select
                        defaultValue={"option"}
                        className="form-control height-30"
                        id="sel3"
                     >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                     </select>
                  </div>
                  <div className="form-group mb-3">
                     <label>Hats</label>
                     <select
                        defaultValue={"option"}
                        className="form-control height-30"
                        id="sel4"
                     >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                     </select>
                  </div>
                  <div className="form-group mb-3">
                     <label>Clothes</label>
                     <select
                        defaultValue={"option"}
                        className="form-control height-30"
                        id="sel5"
                     >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-10">
               <div className="d-flex m-2 align-items-center justify-content-between">
                  <div className="align-items-center d-flex col-lg-3">
                     <img src={nftImage} className="img-fluid width-50 rounded-circle"></img>
                     <span className="text-uppercase fs-1 fw-bold font-monospace text-white ps-3">{collectionName}</span>
                  </div>
                  <div className="d-flex col-lg-2">
                     <div className="d-flex px-1 align-items-center">
                        <div className="me-2">
                           <a href="#"><img src="https://img.icons8.com/color/2x/domain.png" className="img-fluid"></img></a>
                        </div>
                     </div>
                     <div className="d-flex px-1 align-items-center">
                        <div className="me-2">
                           <a href="#"><img src="https://img.icons8.com/fluency/2x/discord-logo.png" className="img-fluid"></img></a>
                        </div>
                     </div>
                     <div className="d-flex px-1 align-items-center">
                        <div className="me-2">
                           <a href="#"><img src="https://img.icons8.com/color/2x/twitter.png" className="img-fluid"></img></a>
                        </div>
                     </div>
                     <div className="d-flex px-1 align-items-center">
                        <div className="me-2">
                           <a href="#"><img src="https://img.icons8.com/color/2x/inshot.png" className="img-fluid"></img></a>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex col-lg-3">
                     <div className="d-flex flex-column px-2">
                        <span className="text-danger fs-5">7 Day Volume</span>
                        <span>11,067.19 ETH</span>
                     </div>
                     <div className="d-flex flex-column px-2">
                        <span className="text-danger fs-5">7 Day Volume</span>
                        <span>11,067.19 ETH</span>
                     </div>
                     <div className="d-flex flex-column px-2">
                        <span className="text-danger fs-5">7 Day Volume</span>
                        <span>11,067.19 ETH</span>
                     </div>
                  </div>
               </div>
               <div className="divider"></div>
               <div className="d-flex">

               </div>
               <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex">
                     <text className="h5 m-0">10,000 Total Bored Ape Yacht Club</text>
                     <text className="h5 m-0 ms-4">Price Floor: 85 ETH</text>
                  </div>
                  <div className="d-flex align-items-center">
                     <text className="h5 m-0 me-2">Sort by : </text>

                     <div className="form-group align-items-center">
                        <select
                           defaultValue={"option"}
                           className="form-control height-30"
                           id="sort"
                        >
                           <option>High to Low</option>
                           <option>Low to High</option>
                           <option>Low to High</option>
                           <option>Low to High</option>
                        </select>
                     </div>
                     <text className="h5 m-0 ms-2">Price Floor: 85 ETH</text>
                     <div className="align-items-center margin-mt4 ms-3">
                        <Nav>{pag("sm", true, "", true, true)}</Nav>
                     </div>
                  </div>
               </div>
               <div className="row mt-3">
                  {productData.map((product) => (
                     <Products key={product.key} product={product} />
                  ))}
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default ProductGrid;
