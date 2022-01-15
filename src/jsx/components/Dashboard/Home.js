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
import News from '../Lezato/Card/News';
const RevenuChart = loadable(() =>
	pMinDelay(import("../Lezato/Home/RevenuChart"), 1000)
);

const cardBlog = [
	{ title: 'Total Menus', Numbers: '459', Chartvalue: 60, Icons: <JuiceIcon /> },
	{ title: 'Total Revenue', Numbers: '$87,561', Chartvalue: 80, Icons: <DollerIcon /> },
	{ title: 'Total Oders', Numbers: '247', Chartvalue: 60, Icons: <DollerIcon /> },
	{ title: 'Total Customers', Numbers: '872', Chartvalue: 70, Icons: <UserIcon /> },
];

const Home = () => {
	const { changeBackground, background } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	}, []);
	return (
		<>
			{/* <div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
				<h2 className="mb-3 me-auto">Dashboard</h2>
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item active"><Link to={"#"}>Dashboard</Link></li>
						<li className="breadcrumb-item"><Link to={"#"}>Dashboard</Link></li>
					</ol>
				</div>
			</div> */}
			<div className="row">
				<div className="col-xl-6 col-xxl-6">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0">
									<div className="justify-content-center">
										<h1 className="b-1">Notable Collections</h1>
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
				<div className="col-xl-6 col-xxl-6">
					<div className="row">
						<div className="col-xl-12">
							{/* <CustomerMap /> */}
							<News></News>
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
export default Home;