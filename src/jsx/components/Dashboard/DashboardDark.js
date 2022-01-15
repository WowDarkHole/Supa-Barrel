import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

//Import
import { ThemeContext } from "../../../context/ThemeContext";
import { JuiceIcon, DollerIcon, UserIcon } from '../Lezato/Home/SvgIcons/SvgIcons';
import DonutChart from '../Lezato/Home/DonutChart';
import DailyTrending from '../Lezato/Home/DailyTrending';
import TrandingBlog from '../Lezato/Home/TrandingBlog';
import CustomerMap from '../Lezato/Home/CustomerMap';
import CustomersBlog from '../Lezato/Home/CustomersBlog';
import DeliveryMaps from '../Lezato/Home/DeliveryMaps';

const RevenuChart = loadable(() =>
	pMinDelay(import("../Lezato/Home/RevenuChart"), 1000)
);

const cardBlog = [
	{ title: 'Total Menus', Numbers: '459', Chartvalue: 60, Icons: <JuiceIcon /> },
	{ title: 'Total Revenue', Numbers: '$87,561', Chartvalue: 80, Icons: <DollerIcon /> },
	{ title: 'Total Oders', Numbers: '247', Chartvalue: 60, Icons: <DollerIcon /> },
	{ title: 'Total Customers', Numbers: '872', Chartvalue: 70, Icons: <UserIcon /> },
];

const DashboardDark = () => {
	const { changeBackground, background } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);
	return (
		<>
			<div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
				<h2 className="mb-3 me-auto">Dashboard</h2>
				{/* <div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><Link to={"#"}>Dashboard</Link></li>
						<li className="breadcrumb-item"><Link to={"#"}>Dashboard</Link></li>
					</ol>
				</div> */}
			</div>
			<div className="row">
				<div className="col-xl-6">
					<div className="row">
						{cardBlog.map((data, index) => (
							<div className="col-xl-6 col-sm-6" key={index}>
								<div className="card">
									<div className="card-body d-flex align-items-center justify-content-between">
										<div className="menu">
											<span className="font-w500 fs-16 d-block mb-2">{data.title}</span>
											<h2>{data.Numbers}</h2>
										</div>
										<div className="d-inline-block position-relative donut-chart-sale">
											{/* <span className="donut1" data-peity='{ "fill": ["rgb(98, 79, 209,1)", "rgba(247, 245, 255)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
											<DonutChart value={data.Chartvalue} backgroundColor="rgba(98, 79, 209,1)"
												backgroundColor2="rgba(247, 245, 255)"
											/>
											<small className="text-black">
												{data.Icons}
											</small>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-xl-6">
					<div className="card">
						<div className="card-header border-0 flex-wrap pb-0">
							<div className="mb-sm-0 mb-2">
								<h4 className="fs-20">Today’s Revenue</h4>
								<span>Lorem ipsum dolor sit amet, consectetur</span>
							</div>
							<div>
								<h2 className="font-w700 mb-0">$ 240.45</h2>
								<p className="mb-0 font-w700"><span className="text-success">0,5% </span>than last day</p>
							</div>
						</div>
						<div className="card-body py-0">
							<div id="revenueChart" className="revenueChart">
								<RevenuChart />
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-xxl-4">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0">
									<div>
										<h4 className="fs-20 mb-1">Daily Trending Menus</h4>
										<span>Lorem ipsum dolor sit amet, consectetur</span>
									</div>
								</div>
								<DailyTrending />
							</div>
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0">
									<div>
										<h4 className="fs-20 mb-1">Trending Keyword</h4>
										<span>Lorem ipsum dolor sit amet, consectetur</span>
									</div>
								</div>
								<TrandingBlog />
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8">
					<div className="row">
						<div className="col-xl-12">
							<CustomerMap />
						</div>
						<div className="col-xl-4 col-xxl-12">
							<div className="row">
								<div className="col-xl-12">
									<CustomersBlog />
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-xxl-12">
							<div className="row">
								<div className="col-xl-12">
									<DeliveryMaps />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}
export default DashboardDark;