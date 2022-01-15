import React,{useState} from 'react';
import { Dropdown, Nav, Tab } from "react-bootstrap";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
//Import
import btc1 from './../../../../images/svg/btc1.svg';
import {QuickTradeTab1} from './QuickTradeTab';
import EthereumTab from './EthereumTab';
import MoneroTab from './MoneroTab';
import LitecoinTab from './LitecoinTab';
import {Sellorder, Buyorder, DropDownBlog} from './OrderBlog';
const CoinLineChart1 = loadable(() =>
	pMinDelay(import("./CoinCharts/CoinLineChart1"), 1000)
);

const CoinDetailTab = () =>{
	const [doller, setDoller] = useState("USD ($ US Dollar)");		
	return(
		<>
			<Tab.Container defaultActiveKey="Ethereum">
				<div className="d-flex flex-wrap mb-sm-4 mt-3 text-head">
					<h2 className="text-black me-auto font-w600 mb-2">Coin Details</h2>
					<div className="card-action coin-tabs mt-3 mt-sm-0">
						<Nav as="ul" className="nav nav-tabs" role="tablist">
							<Nav.Item as="li" className="nav-item">
								<Nav.Link as="a" className="nav-link "  eventKey="Bitcoin" role="tab">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
										<path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
										<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
									</svg>
									Bitcoin
								</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link as="a" className="nav-link "  eventKey="Ethereum" role="tab">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.3801 13.8734C12.136 13.9546 11.864 13.9546 11.6199 13.8734L9 13L12 18L15 13L12.3801 13.8734Z" fill="#00ADA3"/>
										<path d="M12 12L15 10.8001L12 6L9 10.8001L12 12Z" fill="#00ADA3"/>
										<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z" fill="#627EEA"/>
									</svg>
									Ethereum
								</Nav.Link>
							</Nav.Item>
							
							<Nav.Item as="li" className="nav-item">
								<Nav.Link as="a" className="nav-link "  eventKey="Monero" role="tab">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
										<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
									</svg>
									Monero
								</Nav.Link>
							</Nav.Item>
							
							<Nav.Item as="li" className="nav-item">
								<Nav.Link as="a" className="nav-link"  eventKey="Litecoin" role="tab">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0V0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z" fill="#374C98"/>
									</svg>
									Litecoin
								</Nav.Link>
							</Nav.Item>
						 </Nav>	
					</div>
				</div>
				<Tab.Content className="tab-content">
					<Tab.Pane  className="tab-pane fade" eventKey="Bitcoin">
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
												<img src={btc1} alt="" />
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
											<CoinLineChart1 />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-3 col-xxl-6 col-md-6">
								<Sellorder />
							</div>
							<div className="col-xl-3 col-xxl-6 col-md-6">
								<Buyorder />
							</div>
							<div className="col-xl-6 col-xxl-12">
								<QuickTradeTab1 />
							</div>
						</div>	
					</Tab.Pane>	
					<Tab.Pane eventKey="Ethereum">
						<EthereumTab />
					</Tab.Pane>	
					<Tab.Pane eventKey="Monero">
						<MoneroTab />
					</Tab.Pane>	
					<Tab.Pane eventKey="Litecoin">
						<LitecoinTab />
					</Tab.Pane>	
				</Tab.Content>		
			</Tab.Container>	
		</>
	)
}
export default CoinDetailTab;