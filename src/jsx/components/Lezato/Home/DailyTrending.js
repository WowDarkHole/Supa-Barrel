import React from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
//Images
import MenuImg1 from './../../../../images/menu/pic1.jpg';
import MenuImg2 from './../../../../images/menu/pic2.jpg';
import MenuImg3 from './../../../../images/menu/pic3.jpg';
import MenuImg4 from './../../../../images/menu/pic4.jpg';

const productBlog = [
	{ Pid: '#1', title: 'Cool Cats NFT', Image: MenuImg1 },
	{ Pid: '#2', title: 'Moon Boyz', Image: MenuImg2 },
	{ Pid: '#3', title: 'Frog Land NFT', Image: MenuImg3 },
	{ Pid: '#4', title: 'Wulfz NFT', Image: MenuImg4 },
	{ Pid: '#5', title: 'CryptoPunk', Image: MenuImg1 },
	{ Pid: '#3', title: 'VeeFriends', Image: MenuImg3 },
	{ Pid: '#4', title: 'Crypto Baristas', Image: MenuImg4 },
	{ Pid: '#5', title: 'Meka Verse', Image: MenuImg1 },
	{ Pid: '#3', title: 'Nouns', Image: MenuImg3 },
	{ Pid: '#4', title: 'Adam Bomb Squad', Image: MenuImg4 },
	{ Pid: '#5', title: 'Decentraland', Image: MenuImg1 },
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
							<span className="num">{item.Pid}</span>
							<div className="me-auto pe-3">
								<Link to={"/ecom-product-grid"}><h2 className="text-black fs-22 font-w600">{item.title}</h2></Link>
								<span className="text-black font-w600 d-inline-block me-3">$5.6 </span> <span className="fs-14">Order 89x</span>
							</div>
							<Link to={"/ecom-product-grid"}><img src={item.Image} alt="" /></Link>
						</div>
					))}
				</PerfectScrollbar>
			</div>
		</>
	)
}
export default DailyTrending; 