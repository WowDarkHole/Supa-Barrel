import React,{useState} from 'react';
import { Dropdown } from "react-bootstrap";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

//import
import ltc from './../../../../images/svg/ltc.svg';
import {QuickTradeTab4} from './QuickTradeTab';
import {Sellorder, Buyorder, DropDownBlog} from './OrderBlog';
const CoinLineChart4 = loadable(() =>
	pMinDelay(import("./CoinCharts/CoinLineChart4"), 1000)
);

const LitecoinTab = () =>{
	const [doller, setDoller] = useState("USD ($ US Dollar)");	
	return(
		<>
			<div className="row">
				<div className="col-xl-3 col-xxl-4 mt-4">
					<div className="card">
						<div className="card-header pb-0 border-0">
							<h4 className="mb-0 text-black fs-20">About</h4>
							<DropDownBlog />
						</div>
						<div className="card-body">
							<div className="d-flex align-items-start mb-3 about-coin">
								<div>
									<img src={ltc} alt="" />
								</div>
								<div className="ms-3">
									<h2 className="font-w600 text-black mb-0 title">Digital Cash</h2>
									<p className="font-w600 text-black sub-title">BTC</p>
									<span>1 BTC = 68.48 USD</span>
								</div>	
							</div>
							<p className="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>
							<p className="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8 mt-4">
					<div className="card">
						<div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
							<div className="me-auto mb-3">
								<h4 className="fs-20 text-black">Coin Chart</h4>
								<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
							</div>
							
							<div className="input-group detault-daterange me-3  mb-3 coinDetails-datepiker">
								<span className="input-group-text"><i className="las la-calendar"></i></span>
								<DateRangePicker>
									<input type="text" className="form-control" />
								</DateRangePicker>
							</div>
							<Dropdown className="">
								<Dropdown.Toggle variant="" as="div" className="form-control style-1 default-select  mb-3 rounded">{doller} </Dropdown.Toggle>
								<Dropdown.Menu >
									<Dropdown.Item onClick={() => setDoller("USD ($ US Dollar)")}>USD ($ US Dollar)</Dropdown.Item>
									<Dropdown.Item onClick={() => setDoller("BTC ($ US Dollar")}>BTC ($ US Dollar</Dropdown.Item>
									<Dropdown.Item onClick={() => setDoller("USD ($ US Dollar)")}>USD ($ US Dollar)</Dropdown.Item>
								 </Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="card-body pb-0 pt-sm-3 pt-0">
							<div className="row sp20 mb-4 align-items-center">
								<div className="col-lg-4 col-xxl-4 col-sm-4 d-flex flex-wrap align-items-center">
									<div className="px-2 info-group">
										<p className="fs-18 mb-1">Price</p>
										<h2 className="fs-28 font-w600 text-black">$11,898.15</h2>
									</div>
								</div>
								<div className="d-flex col-lg-8 col-xxl-8 col-sm-8 align-items-center mt-sm-0 mt-3 justify-content-end">
									<div className="px-2 info-group">
										<p className="fs-14 mb-1">24h% change</p>
										<h3 className="fs-20 font-w600"><span className="text-success me-1">1.64%</span>
										<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z" fill="#2BC155"></path>
										</svg>
										</h3>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1">Volume (24h)</p>
										<h3 className="fs-20 font-w600 text-black">$47.22B</h3>
									</div>
									<div className="px-2 info-group">
										<p className="fs-14 mb-1">Market Cap</p>
										<h3 className="fs-20 font-w600 text-black">$219.24B</h3>
									</div>
								</div>
							</div>
							<div id="chartBarRunning" className="bar-chart">
								<CoinLineChart4 />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-3 col-xxl-6 col-md-6">
					<Sellorder />
				</div>
				<div class="col-xl-3 col-xxl-6 col-md-6">
					<Buyorder />
				</div>
				<div class="col-xl-6 col-xxl-12">
					<QuickTradeTab4 />
				</div>
			</div>		
		</>
	)
}
export default LitecoinTab;