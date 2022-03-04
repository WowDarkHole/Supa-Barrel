import React, { Fragment, useState, useEffect, useContext } from "react";
import Products from "./Products";
import Select from "react-select";
import { ThemeContext } from "../../../../../context/ThemeContext";
import moment from 'moment';
import axios from 'axios';
import { Audio, BallTriangle, TailSpin } from 'react-loader-spinner';

/// Data
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

const ProductGrid = (props) => {
   const itemsPerPage = 500;
   const [selectedOption, setSelectedOption] = useState(0);
   const [listType, setListType] = useState("");
   const [minEth, setMinEth] = useState(0);
   const [maxEth, setMaxEth] = useState(0);
   const [minRank, setMinRank] = useState(0);
   const [maxRank, setMaxRank] = useState(0);
   const [traitsCount, setTraitsCount] = useState(0);
   const [traits, setTraits] = useState([]);
   const [loadedNft, setLoadedNft] = useState([]);
   const [filteredNft, setFilteredNft] = useState([]);
   const [sortType, setSortType] = useState("ltoh");
   const [pageNum, setPageNum] = useState(0);
   const [loading, setLoading] = useState(true);
   const { navigationHader, openMenuToggle, background } = useContext(
      ThemeContext
   );
   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const [collectionData, setCollectionData] = useState([]);
   const [contractAddress, setContractAddress] = useState('');
   let contractA = '';
   // let traits = [];
   const collectionName = props.location.state.name;
   const slug = props.location.state.slug;
   useEffect(() => {
      openMenuToggle();

      const fetchSingleCollection = async () => {
         const response = await axios.get('https://api.opensea.io/api/v1/collection/' + slug);
         if (response) {
            setCollectionData(response.data.collection);
         }
         contractA = response.data.collection.primary_asset_contracts[0].address;
         console.log(contractA);
         setContractAddress(contractA);
         const traiting = response.data.collection.traits.Background;
         const trait_data = [];
         // setContractAddress(response.data.collection.primary_asset_contracts)
         // console.log(response.data.collection.traits);
         // setTraits(response.data.collection.traits);
         setTraits(response.data.collection.traits.Background);
         for (let i in traiting) {
            trait_data.push([i, traiting[i]]);
         }
         // console.log(trait_data);
         setTraits(trait_data);
         getCollectionsByPage();
         setLoading(false);
      }

      fetchSingleCollection();

   }, []);

   useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(filteredNft.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filteredNft.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, filteredNft]);

   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredNft.length;
      console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setPageNum(event.selected);
      setItemOffset(newOffset);
   };

   const onSubmitActions = () => {
      getFilterResult(listType, minEth, maxEth, minRank, maxRank, traitsCount, traits);
   }
   const getFilterResult = (listing, minPrice, maxPrice, minRank, maxRank, traitCount, traits) => {
      console.log("eth Clicked:", filteredNft);
      let fd = loadedNft;
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
      setFilteredNft(fd);
      // onFilteredPagination(fd);
   }
   const onSortHandleChange = (e) => {
      setSortType(e.target.value);
      let sd = filteredNft;
      console.log("SortType:", sortType);
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
      setFilteredNft(sd);
      //useEffect not calling
   }

   const onHandleTraits = (e) => {
      setTraitsCount(traitsCount);
   }

   const getCollectionsByPage = async () => {
      let apiURL = 'https://deep-index.moralis.io/api/v2/nft/' + contractA + '?chain=eth&format=decimal&offset=' + pageNum * 500;
      console.log(apiURL);
      const response = await axios.get(apiURL, { headers: { 'X-API-Key': '6FJVVQ5QEUWEOOdApB0kkx2sgfQDdXxNyACMEVpLuSio3tK30e4uUWyKM9yp4jCr' } });

      const dataArr = response.data.result;
      console.log(dataArr)
      dataArr.forEach(async function (item, index) {
         console.log(item);
         const metadata = JSON.parse(item.metadata);
         console.log("MetaData:", metadata);
         dataArr[index].image = '';
         if (metadata.image) {
            dataArr[index].image = metadata.image;
         }
         else if (metadata.image_url) {
            dataArr[index].image = metadata.image_url;
         }
         else {
            const token_uri = await axios.get(item.token_uri);
            if (token_uri.data.image) {
               dataArr[index].image = token_uri.data.image;
            }
            else if (token_uri.data.image_url) {
               dataArr[index].image = token_uri.data.image_url;
            }

         }
         console.log("~~~" + dataArr[index].image);


      })
      setFilteredNft(dataArr);
      console.log(dataArr);
      setLoadedNft(dataArr);
   }

   return (
      <Fragment>
         {!loading ? (
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
                           id="sel9"
                        >
                           <option>{traits}</option>
                           <option>2</option>
                           {/* <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option> */}
                           {/* {
                              traits.map(function (val) {
                                 return <option>val</option>
                              })} */}
                           {
                              traits ? traits.map(function (val) {
                                 <option>{val}</option>
                              }) : null
                           }
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
                     <div className="align-items-center d-flex col-lg-5">
                        <img src={collectionData.image_url} className="img-fluid width-50 rounded-circle"></img>
                        <span className="text-uppercase fs-1 fw-bold font-monospace text-white ps-3">{collectionData.name}</span>
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
                           <span>{Number(collectionData.stats.seven_day_volume).toFixed(1)} ETH</span>
                        </div>
                        <div className="d-flex flex-column px-2">
                           <span className="text-danger fs-5">Total Volume</span>
                           <span>{Number(collectionData.stats.total_volume).toFixed(1)} ETH</span>
                        </div>
                        <div className="d-flex flex-column px-2">
                           <span className="text-danger fs-5">7 Day Average Price</span>
                           <span>{Number(collectionData.stats.seven_day_average_price).toFixed(1)} ETH</span>
                        </div>
                     </div>
                  </div>
                  <div className="divider"></div>
                  <div className="d-flex">

                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                     <div className="d-flex">
                        <span className="h5 m-0">{collectionData.name} : {Number(collectionData.stats.count).toFixed(0)} </span>
                        <span className="h5 m-0 ms-4">Price Floor: {collectionData.stats.floor_price}ETH</span>
                     </div>
                     <div className="d-flex align-items-center">
                        <span className="h5 m-0 me-2">Sort by : </span>

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
                        <div className="align-items-center ms-3">
                           <ReactPaginate
                              nextLabel=" >"
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={3}
                              marginPagesDisplayed={2}
                              pageCount={pageCount}
                              previousLabel="< "
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
                        <Products key={product.key} product={product} contractAddress={contractAddress} />
                     ))}
                  </div>
               </div>
            </div>) : (<div>
               <BallTriangle color="#eeb417" height={80} width={80} /></div>)}
      </Fragment>
   );
};

export default ProductGrid;
