import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";

const RaritySearchList = (props) => {
	const { data, row } = props;
	return (
		<>
			<div className="card-body pb-2">
				<PerfectScrollbar
					style={{ height: "600px" }}
					id="DZ_W_TimeLine1"
					className="widget-timeline dz-scroll style-1 ps ps--active-y"
				>
					{data.map((item, ind) => (
						<div className="d-flex pb-3 mb-3 tr-row align-items-center border-bottom pe-3" key={ind}>
							<span className="num">{item.id}</span>
							<div className="me-auto pe-3">
								<Link to={{
									pathname: "/ecom-product-grid",
									state: item
								}}><h2 className="text-black fs-22 font-w600">{item.name}</h2></Link>
								{/* <span className="text-black font-w500 d-inline-block me-3">Total Volume: {item.collectionStats[0].totalVolume} </span> */}
							</div>
							<Link to={"/ecom-product-grid"}><img src={item.imageUrl} alt="" /></Link>
						</div>
					))}
				</PerfectScrollbar>
			</div>
		</>
	)
}
export default RaritySearchList; 