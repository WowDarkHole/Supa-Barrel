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
import ReactPaginate from 'react-paginate';
const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

const ProductGrid = () => {
   const itemsPerPage = 12;
   const [selectedOption, setSelectedOption] = useState(null);
   const [listType, setListType] = useState("");
   const [minEth, setMinEth] = useState(null);
   const [maxEth, setMaxEth] = useState(null);
   const [minRank, setMinRank] = useState(null);
   const [maxRank, setMaxRank] = useState(null);
   const [traitsCount, setTraitsCount] = useState(null);
   const [traits, setTraits] = useState(null);
   const collectionName = "Bored NFT";
   const [filteredNft, setFilteredNft] = useState(productData);
   const [sortType, setSortType] = useState();
   const [pageNum, setPageNum] = useState(1);
   const { navigationHader, openMenuToggle, background } = useContext(
      ThemeContext
   );
   // useEffect(() => {
   //    console.log("!!!!!!");
   //    openMenuToggle();
   // }, [])

   const [currentItems, setCurrentItems] = useState(productData.slice(0, 12));
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      console.log(filteredNft);
      setCurrentItems(filteredNft.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filteredNft.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredNft.length;
      console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
   };

   const onSubmitActions = () => {
      getFilterResult(listType, minEth, maxEth, minRank, maxRank, traitsCount, traits);
   }
   const getFilterResult = (listing, minPrice, maxPrice, minRank, maxRank, traitCount, traits) => {
      let fd = filteredNft;
      // if(listing){}
      if (minPrice) {
         const filtered = fd.filter(function (el) {
            const price = Number(el.price);
            return price > minPrice;
         });
         fd = filtered;
      }
      if (maxPrice) {
         const filtered = fd.filter(function (el) {
            const price = Number(el.price);
            return price < maxPrice;
         });
         fd = filtered;
      }
      // if (minRank) {
      //    const filtered = fd.filter(function (el) {
      //       const price = Number(el.rank);
      //       return price > minPrice;
      //    });
      //    fd = filtered;
      // }
      // if (maxRank) {
      //    const filtered = fd.filter(function (el) {
      //       const price = Number(el.rank);
      //       return price < maxPrice;
      //    });
      //    fd = filtered;
      // }
      onFilteredPagination(fd);
   }

   const onFilteredPagination = (filteredData) => {
      // let pagi = filteredData;
      // console.log(filteredData);
      // console.log("PageNum:", pageNum);
      // const paged = pagi.slice((pageNum - 1) * 10, pageNum * 12);
      // console.log(paged);
      setFilteredNft(filteredData);
   }

   const onSortHandleChange = (e) => {
      console.log(e.target.value);
      setSortType(e.target.value);
      let sd = filteredNft;
      const sorted = sd.sort(function (a, b) {
         switch (e.target.value) {
            case "ltoh":
               return Number(a.price) - Number(b.price);
            case "htol":
               return Number(b.price) - Number(a.price);
            case "rarity":
               break;
            case "rl":
               break;
            case "id":
               break;
         }

      })
      sd = sorted;
      onFilteredPagination(sd);
   }

   const onHandleTraits = (e) => {
      setTraitsCount(traitsCount);
   }

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
                     {/* <button className="btn btn-primary btn-xs me-2" onClick={() => setListType("buynow")}>Buy Now</button>
                     <button className="btn btn-primary btn-xs" onClick={() => setListType("auction")}>Auction</button> */}
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                           <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value=""
                                    defaultChecked
                                 />
                                 Option 1
                              </label>
                           </div>
                           <div className="form-check form-check-inline">
                              <label className="form-check-label">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value=""
                                 />
                                 Option 2
                              </label>
                           </div>
                        </div>
                     </form>
                  </div>
                  <h5 className="mt-3">Price</h5>
                  <h6>(Buy Now Only)</h6>
                  <div className="d-flex justify-content-between align-items-center">
                     <input className="form-control height-30" placeholder="Min ETH" onChange={(event) => setMinEth(event.target.value)}></input>
                     <span className="height-1 border border-1 width-10 border-white mx-2"></span>
                     <input className="form-control height-30" placeholder="Min ETH" onChange={(event) => setMaxEth(event.target.value)}></input>
                  </div>
                  <button className="btn btn-primary btn-sm width-100 mt-3" onClick={() => onSubmitActions()}><h5 className="m-0">Apply</h5></button>
                  <h5 className="mt-3">Rarity</h5>
                  <div className="d-flex justify-content-between align-items-center">
                     <input className="form-control height-30" placeholder="Min Rank #" onChange={(event) => setMinRank(event.target.value)}></input>
                     <span className="height-1 border border-1 width-10 border-white mx-2"></span>
                     <input className="form-control height-30" placeholder="Max Rank #" onChange={(event) => setMaxRank(event.target.value)}></input>
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
                        onChange={() => onHandleTraits()}
                        value={traitsCount}
                     >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
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
                           value={sortType}
                           onChange={(event) => onSortHandleChange(event)}
                        >
                           <option value="rarity">Rarity</option>
                           <option value="ltoh">Low to High</option>
                           <option value="htol">High to Low</option>
                           <option value="rl">Recently Listed</option>
                           <option value="id">ID</option>
                        </select>
                     </div>
                     <text className="h5 m-0 ms-2">Price Floor: 85 ETH</text>
                     <div className="align-items-center ms-3">
                        <ReactPaginate
                           nextLabel="next >"
                           onPageChange={handlePageClick}
                           pageRangeDisplayed={3}
                           marginPagesDisplayed={2}
                           pageCount={pageCount}
                           previousLabel="< previous"
                           pageClassName="page-item"
                           pageLinkClassName="page-link"
                           previousClassName="page-item"
                           previousLinkClassName="page-link"
                           nextClassName="page-item"
                           nextLinkClassName="page-link"
                           breakLabel="..."
                           breakClassName="page-item"
                           breakLinkClassName="page-link"
                           containerClassName="pagination"
                           activeClassName="active"
                           renderOnZeroPageCount={null}
                        />
                     </div>
                  </div>
               </div>
               <div className="row mt-3">
                  {currentItems.map((product) => (
                     <Products key={product.key} product={product} />
                  ))}
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default ProductGrid;
