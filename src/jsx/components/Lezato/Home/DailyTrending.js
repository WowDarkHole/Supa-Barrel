import React from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
//Images

import contact1 from './../../../../images/contacts/m1.png';
import contact2 from './../../../../images/contacts/m2.png';
import contact3 from './../../../../images/contacts/m3.png';
import contact4 from './../../../../images/contacts/m4.png';
import contact5 from './../../../../images/contacts/m5.png';
import contact6 from './../../../../images/contacts/m6.png';
import contact7 from './../../../../images/contacts/m7.png';

const productBlog = [
	{
		id: "#1", image: contact1, title: 'Cool Cats NFT',
		quntity: '9999x', price: '15k ETH', totalprice: '11,523 ETH',
	},
	{
		id: "#2", image: contact2, title: 'Moon Boyz',
		quntity: '4444x', price: '17k ETH', totalprice: '16,543 ETH',
	},
	{
		id: "#3", image: contact3, title: 'Frog Land NFT',
		quntity: '7777x', price: '11k ETH', totalprice: '9,401 ETH',
	},
	{
		id: "#4", image: contact4, title: 'Wulfz NFT',
		quntity: '5555x', price: '1 ETH', totalprice: '1,543 ETH',
	},
	{
		id: "#5", image: contact5, title: 'Crypto Punk',
		quntity: '1x', price: '12k ETH', totalprice: '401 ETH',
	},
	{
		id: "#6", image: contact6, title: 'Vee Friends',
		quntity: '1x', price: '13k ETH', totalprice: '90,568 ETH',
	},
	{
		id: "#7", image: contact7, title: 'Beeple',
		quntity: '1x', price: '11k ETH', totalprice: '120,523 ETH',
	},
];

const DailyTrending = () => {
	return (
		<>
			<div className="card-body pb-2">
				<PerfectScrollbar
					style={{ height: "600px" }}
					id="DZ_W_TimeLine1"
					className="widget-timeline dz-scroll style-1 ps ps--active-y"
				>
					{productBlog.map((item, ind) => (
						<div className="d-flex pb-3 mb-3 tr-row align-items-center border-bottom pe-3" key={ind}>
							<span className="num">{item.id}</span>
							<div className="me-auto pe-3">
								<Link to={"/ecom-product-grid"}><h2 className="text-black fs-22 font-w600">{item.title}</h2></Link>
								<span className="text-black font-w600 d-inline-block me-3">{item.totalprice} </span> <span className="fs-14">{item.quntity}</span>
							</div>
							<Link to={"/ecom-product-grid"}><img src={item.image} alt="" /></Link>
						</div>
					))}
				</PerfectScrollbar>
			</div>
		</>
	)
}
export default DailyTrending; 