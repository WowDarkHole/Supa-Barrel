import React from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import OrderDetailsBlog from '../Lezato/Order/OrderDetailsBlog';
import ItemCard from '../Lezato/Order/ItemCard';

import map from './../../../images/map.jpg';
import pic1 from './../../../images/pic1.jpg';
import profile1 from './../../../images/profile/p1.jpg';


const ApexPieChart = loadable(() =>
	pMinDelay(import('../Lezato/Order/ApexPieChart'), 1000)
);

const OrderDetails = () =>{
	return(
		<>
			<div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
				<h2 className="mb-3 me-auto">Order ID #001234124</h2>
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item active"><Link to={"#"}>Order</Link></li>
						<li className="breadcrumb-item"><Link to={"#"}>Order Details</Link></li>
					</ol>
				</div>
			</div>	
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body">
							<div className="steps">	
								<OrderDetailsBlog />
							</div>	
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<img src={map} alt="" style={{width:"100%"}} />
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-md-7">
							<div className="card">
								<div className="card-body d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center delivery-guy">
										<div className="me-3">
											<img src={pic1} alt="" />
										</div>
										<div>
											<span>Delivery guy</span>
											<h4 className="mb-0">Louis Simatupang</h4>
											<span className="text-primary">ID 412455</span>
										</div>
									</div>
									<div>
										<ul className="delivery-contact">
											<li><Link to={"#"} className="me-3"><i className="fas fa-comment-dots"></i></Link></li>
											<li><Link to={"#"}><i className="fas fa-phone-alt"></i></Link></li>	
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-5">
							<div className="card">
								<div className="card-body">
									<div className="d-flex">
										<svg className="me-2 vert-move" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M44.0137 6.54388C42.2281 4.7611 39.4593 4.65722 36.8259 7.28777L28.7931 15.32C27.902 14.9411 26.9876 14.7305 26.2148 14.5211L10.4654 11.0694C7.87258 10.5022 5.30925 13.9917 9.24425 16.2661L21.0359 23.0772L13.5298 32.3533L8.5037 31.9028C6.79647 31.7522 5.41036 33.5628 7.28536 35.4389L15.1209 43.2711C16.9959 45.1461 18.8076 43.7628 18.6537 42.0555L18.2054 37.0294L27.4815 29.5206L34.2931 41.3144C36.5676 45.25 40.057 42.6839 39.4898 40.0939L36.0348 24.3439C35.8293 23.5711 35.6181 22.6572 35.2387 21.7639L43.2681 13.7339C45.9026 11.1011 45.7987 8.32944 44.0137 6.54388Z" fill="#624FD1"></path>
											<path d="M8.3045 18.5694C7.97728 18.5811 7.66784 18.7167 7.43895 18.9517L4.86339 21.5266C4.37228 22.0183 4.37228 22.8172 4.86117 23.3094C5.35339 23.8011 6.15173 23.8044 6.64339 23.3116L9.21895 20.7372C10.0495 19.9355 9.45617 18.5344 8.3045 18.5694Z" fill="#FD683E"></path>
											<path d="M13.8341 21.4261C13.5069 21.4339 13.1975 21.5733 12.9686 21.8072L7.5347 27.2416C7.04248 27.7333 7.0397 28.5283 7.53192 29.0233C8.02359 29.515 8.82192 29.515 9.31414 29.0233L14.748 23.5894C15.5764 22.7911 14.9864 21.3905 13.8341 21.4261Z" fill="#FD683E"></path>
											<path d="M27.8357 35.4295C27.5085 35.4411 27.1963 35.5772 26.9702 35.8117L21.5363 41.2456C21.0041 41.7295 20.9841 42.5595 21.493 43.0684C21.9996 43.5784 22.833 43.5578 23.3157 43.025L28.753 37.5911C29.5746 36.7906 28.9846 35.395 27.8357 35.4295Z" fill="#FD683E"></path>
											<path d="M30.6888 40.9594C30.3616 40.9683 30.0521 41.105 29.8233 41.3383L27.2477 43.9178C26.756 44.4094 26.756 45.2078 27.251 45.6961C27.7427 46.1889 28.541 46.1889 29.0333 45.6961L31.6088 43.1211C32.4305 42.3166 31.8377 40.9222 30.6888 40.9594Z" fill="#FD683E"></path>
										</svg>	
										<div>
											<span>Estimated Time</span>	
											<h4 className="fs-22 font-w600 mb-0">10-14 Min</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<ItemCard />
						</div>
					</div>
				</div>	
				<div className="col-xl-3 col-xxl-4">
					<div className="row">
						<div className="col-xl-12 col-sm-6">
							<div className="card">
								<div className="card-body">
									<div className="text-center order-media mb-4">
										<img src={profile1} alt="" />
										<div>
											<h4 className="text-black mb-3 font-w600">Soleh Anderson</h4>
											<Link to={"#"} className="btn btn-primary btn-sm">Customer</Link>
										</div>
									</div>
									<div className="imfo align-items-center mb-4">
										<i className="fas fa-phone-alt"></i>
										<h5 className="mb-0 text-black ms-3">+51 5125 626 77</h5>
									</div>
									<div className="imfo align-items-center mb-4">
										<i className="fas fa-map-marker-alt"></i>
										<h5 className="mb-0 text-black ms-3">Franklin Avenue St.<br/>London, ABC 12345<br/	>United Kingdom</h5>
									</div>
								</div>
								<div className="card-footer">
									<h4>Note Order</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
								</div>
								
							</div>
						</div>	
						<div className="col-xl-12 col-sm-6">
							<div className="card">
								<div className="card-header border-0">
									<h4 className="fs-18">Customer Favourite</h4>
								</div>
								<div className="card-body">
									<div id="pieChart2">
										<ApexPieChart />
									</div>
									<div className="chart-items1">
										<div className="d-flex align-items-end mt-2 py-3 justify-content-between">
											<span className="fs-14 font-w500">Pizza  (40%)</span>
											<span className="fs-14"><span className="pe-2"></span>25</span>
										</div>
										<div className="progress default-progress">
											<div className="progress-bar  progress-animated" 
												style={{width: "40%", height:"11px"}} role="progressbar"
											>
												<span className="sr-only">40% Complete</span>
											</div>
										</div>
									</div>
									<div className="chart-items2">
										<div className="d-flex align-items-end mt-2 py-3 justify-content-between">
											<span className="fs-14 font-w500">Juice (53%)</span>
											<span className="fs-14"><span className="pe-2"></span>60</span>
										</div>
										<div className="progress default-progress">
											<div className="progress-bar  progress-animated" 
												style={{ width: "53%", height:"11px"}} role="progressbar"
											>
												<span className="sr-only">53% Complete</span>
											</div>
										</div>
									</div>
									<div className="chart-items3">
										<div className="d-flex align-items-end mt-2 py-3 justify-content-between">
											<span className="fs-14 font-w500">Dessert (25%)</span>
											<span className="fs-14"><span className="pe-2"></span>7</span>
										</div>
										<div className="progress default-progress">
											<div className="progress-bar  progress-animated" 
												style={{width: "25%", height:"11px"}} role="progressbar"
											>
												<span className="sr-only">25% Complete</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>		
		</>
	)
}
export default OrderDetails;