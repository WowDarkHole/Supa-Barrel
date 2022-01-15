import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import DonutChart from '../Lezato/Home/DonutChart';
import StatisticApexChart from '../Lezato/Analytics/StatisticApexChart';
import SalesPieChart from '../Lezato/Analytics/SalesPieChart';
import ChartTimeApex from '../Lezato/Analytics/ChartTimeApex';
import LoyalCustomer from '../Lezato/Analytics/LoyalCustomer';
import FavoritesTab from '../Lezato/Analytics/FavoritesTab';
import BestSelerMenu from '../Lezato/Analytics/BestSelerMenu';
import DailyTrending from '../Lezato/Analytics/DailyTrending';

const dountChartBlog = [
	{title: 'Menus Today', value: 60, number:'346',},
	{title: 'Customer Today', value: 80, number:'221',},
	{title: 'Total Revenue', value: 60, number:'$951.52',},
	{title: 'Employee', value: 70, number:'98',},
];

const Analytics = ()=>{
	const  [session, setSession] = useState('Weekly (2020)');
	const  [session2, setSession2] = useState('Weekly (2020)');
	return(
		<>
			<div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
				<h2 className="mb-3 me-auto">Analytics</h2>
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item active"><Link to={"#"}>Analytics</Link></li>
						<li className="breadcrumb-item"><Link to={"#"}>Analytics</Link></li>
					</ol>
				</div>
			</div>	
			<div className="row">
				{dountChartBlog.map((data, index)=>(	
					<div className="col-xl-3 col-xxl-6 col-sm-6" key={index}>
						<div className="card">
							<div className="card-body d-flex align-items-center justify-content-between">
								<div className="menu">
									<span className="font-w500 fs-16 mb-2 d-block">{data.title}</span>
									<h2>{data.number}</h2>
								</div>	
								<div className="d-inline-block position-relative donut-chart-sale">
									{/* <span className="donut1" data-peity='{ "fill": ["var(--primary)", "rgba(255, 243, 240)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
									<DonutChart value={data.value} backgroundColor="rgba(253,104,62,1)"
										backgroundColor2= "rgba(255, 243, 240)"
									/>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="col-xl-9 col-xxl-12">
					<div className="row">
						<div className="col-xl-8 col-xxl-12">
							<div className="row">
								<div className="col-xl-12 col-xxl-6">
									<div className="card">
										<div className="card-header pb-0 border-0 mb-3 flex-wrap">
											<div className="mb-2">
												<h4 className="fs-20 mb-0">Sales Statistic</h4>
												<span>Lorem ipsum dolor</span>
											</div>
											<div className="d-flex align-items-center mb-2">
												{/* <select className="form-control style-2 default-select">
													<option>Weekly (2020)</option>
													<option>Daily (2020)</option>
													<option>Yearly (2020)</option>
												</select> */}
												<Dropdown className="btn btn-outline-light  btn-rounded default-select-2">
													<Dropdown.Toggle as="div" className="i-false text-black">{session}{" "} 
														<i className="fas fa-chevron-down text-primary"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu className="mt-1">
														<Dropdown.Item className="text-black" onClick={()=>setSession('Weekly (2020)')}>
															Weekly (2020)
														</Dropdown.Item>
														<Dropdown.Item className="text-black" onClick={()=>setSession('Daily (2020)')}>
															Daily (2020)
														</Dropdown.Item>
														<Dropdown.Item className="text-black" onClick={()=>setSession('Yearly (2020)')}>
															Yearly (2020)
														</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
												
												<Dropdown className="dropdown custom-dropdown mb-0 tbl-orders-style">
													<Dropdown.Toggle as="div" className="btn sharp tp-btn dark-btn i-false">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
															<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
															<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
														</svg>
													</Dropdown.Toggle>
													<Dropdown.Menu className="dropdown-menu dropdown-menu-right mb-2">
														<Dropdown.Item className="dropdown-item">Details</Dropdown.Item>
														<Dropdown.Item className="dropdown-item text-danger">Cancel</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</div>
										<div className="card-body py-0">
											<div className="form-check toggle-switch text-end form-switch ms-4 number">
											  <input checked className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
											  <label className="form-check-label" for="flexSwitchCheckDefault">Number</label>
											</div>
											<div id="BarCharts" className="bar-chart">
												<StatisticApexChart />
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-xl-12 col-xxl-6">
									<div className="card">
										<div className="card-header border-0 flex-wrap">
											<div className="mb-sm-0  mb-3">
												<h4 className="fs-20">Sales Summary</h4>
												<span>Lorem ipsum dolor sit amet, consectetur</span>
											</div>	
											<Dropdown className="btn btn-outline-light  btn-rounded default-select-2">
												<Dropdown.Toggle as="div" className="i-false text-primary">{session2}{" "} 
													<i className="fas fa-chevron-down text-primary"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu className="mt-1">
													<Dropdown.Item className="text-primary" onClick={()=>setSession2('Weekly (2020)')}>
														Weekly (2020)
													</Dropdown.Item>
													<Dropdown.Item className="text-primary" onClick={()=>setSession2('Daily (2020)')}>
														Daily (2020)
													</Dropdown.Item>
													<Dropdown.Item className="text-primary" onClick={()=>setSession2('Yearly (2020)')}>
														Yearly (2020)
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="card-body pt-0">
											<div className="row align-items-center">
												<div className="col-sm-6">
													<div id="currentChart1">
														<SalesPieChart />
													</div>
												</div>
												<div className="col-sm-6">	
													<div className="row align-items-center">
														<div className="col-6 d-flex mb-5">
															<svg className="me-2 mt-1" width="10" height="32" viewBox="0 0 10 32" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect y="0.505615" width="10" height="31" rx="5" fill="#216FED"/>
															</svg>
															<div>	
																<h4 className="mb-0 fs-24 font-w600" >63,876</h4>
																<span>Property Sold</span>
															</div>	
														</div>	
														<div className="col-6 d-flex mb-5">
															<svg className="me-2 mt-1" width="10" height="31" viewBox="0 0 10 31" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect y="0.00109863" width="10" height="31" rx="5" fill="#FF8723"/>
															</svg>
															<div>	
																<h4 className="mb-0 fs-24 font-w600" >$97,125</h4>
																<span>Income</span>
															</div>	
														</div>
														<div className="col-6 d-flex">
															<svg className="me-2 mt-1" width="10" height="31" viewBox="0 0 10 31" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect y="0.000976562" width="10" height="31" rx="5" fill="#F43D3D"/>
															</svg>
															<div>	
																<h4 className="mb-0 fs-24 font-w600" >$872,335</h4>
																<span>Expense</span>
															</div>	
														</div>	
														<div className="col-6 d-flex">
															<svg className="me-2 mt-1" width="10" height="31" viewBox="0 0 10 31" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect y="0.000976562" width="10" height="31" rx="5" fill="#F43D3D"/>
															</svg>
															<div>	
																<h4 className="mb-0 fs-24 font-w600" >$97,125</h4>
																<span >Property Rented</span>
															</div>	
														</div>
													</div>
												</div>	
											</div>	
										</div>
									</div>
								</div>							
							</div>
						</div>
						<div className="col-xl-4 col-xxl-12">
							<div className="row">
								<div className="col-xl-12 col-xxl-6 col-md-6">
									<div className="card">
										<div className="card-header border-0">
											<div>
												<h4 className="fs-20">Customer Map</h4>
												<span>Lorem ipsum dolor</span>
											</div>
										</div>
										<div className="card-body pb-0">
											<div id="chartTimeline" className="chart-timeline">
												<ChartTimeApex />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-12 col-xxl-6 col-md-6">
									<LoyalCustomer />
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<FavoritesTab />	
						</div>
					</div>
				</div>	
				<div className="col-xl-3 col-xxl-12">
					<div className="row">
						<div className="col-xl-12 col-xxl-6 col-lg-6">
							<BestSelerMenu />
						</div>
						<div className="col-xl-12 col-xxl-6 col-lg-6">
							<DailyTrending />
						</div>
					</div>
				</div>	
					
			</div>	
				
		</>
	)
}
export default Analytics;