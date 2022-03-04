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
import axios from 'axios';
const RevenuChart = loadable(() =>
	pMinDelay(import("../Lezato/Home/RevenuChart"), 1000)
);

const MockupData = require('../../pages/MockupData1');

const Home = () => {
	const { changeBackground, background } = useContext(ThemeContext);

	const collectionList = [
		'Cool Cat NFT',
		'Moon Boyz',
		'Frog an NFT',
		'Wulfz NFT',
		'Crypto Punk',
		'Vee friend',
		'Beeple EveryDay'
	];
	const pickedCollectionWithData = [];
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
		const fetchCollections = async () => {
			collectionList.forEach(async (item) => {
				const response = await axios.get('https://exodia.io/api/search/' + item);
				const data = response.data;
				pickedCollectionWithData.push(data);
			})
			console.log(pickedCollectionWithData);
		}

		fetchCollections();
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-xl-6 col-xxl-6">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0">
									<div className="justify-content-center">
										<h1 className="b-1">Notable Collections</h1>
										<span>Picked NFT Collections</span>
									</div>
								</div>
								<DailyTrending data={MockupData.default} row={1} />
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-xxl-6">
					<div className="row">
						<div className="col-xl-12">
							<News></News>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Home;