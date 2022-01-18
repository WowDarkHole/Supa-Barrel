import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Images
import contact1 from './../../../../images/contacts/m1.png';
import contact2 from './../../../../images/contacts/m2.png';
import contact3 from './../../../../images/contacts/m3.png';
import contact4 from './../../../../images/contacts/m4.png';
import contact5 from './../../../../images/contacts/m5.png';
import contact6 from './../../../../images/contacts/m6.png';

const ItemBlog = [
	{
		id: 1, image: contact1, title: 'Cool Cats NFT',
		quntity: '1x', price: '$4.12', totalprice: '$4.12',
	},
	{
		id: 2, image: contact2, title: 'Moon Boyz',
		quntity: '2x', price: '$14.99', totalprice: '$44.97',
	},
	{
		id: 3, image: contact3, title: 'Frog Land NFT',
		quntity: '3x', price: '$15.44', totalprice: '$15.44',
	},
	{
		id: 4, image: contact4, title: 'Wulfz NFT',
		quntity: '3x', price: '$15.44', totalprice: '$15.44',
	},
	{
		id: 5, image: contact5, title: 'Crypto Punk',
		quntity: '3x', price: '$15.44', totalprice: '$15.44',
	},
	{
		id: 6, image: contact6, title: 'Vee Friends',
		quntity: '3x', price: '$15.44', totalprice: '$15.44',
	},
];

const ItemCard = () => {

	const [content, setContent] = useState(ItemBlog);
	function handleRemove(id) {
		const newList = content.filter((item) => item.id !== id);
		setContent(newList);
	}
	return (
		<>
			<div className="card">
				<div className="card-body p-0">
					<div className="table-responsive order-list card-table">
						<table className="table items-table table-responsive-md">
							<tbody>
								<tr>
									<th className="text-black font-w700 fs-20">Items</th>
									<th style={{ width: "10%" }} className="text-black font-w700 fs-20">Qty</th>
									<th style={{ width: "10%" }} className="text-black font-w700 fs-20">Price</th>
									<th className="my-0 text-black font-w700 fs-20 wspace-no d-md-none d-lg-table-cell">Total Price</th>
									<th></th>
								</tr>
								{content.map((item, index) => (
									<tr key={index}>
										<td>
											<div className="media">
												<Link to={"#"}>
													<img className="me-3 img-fluid" src={item.image} alt="DexignZone" />
												</Link>
												<div className="media-body">
													<small className="mt-0 mb-1 font-w600">
														<Link to={"#"} className="text-primary">MAIN COURSE</Link>
													</small>
													<h5 className="mt-0 mb-2 mb-sm-3">
														<Link className="text-black" to={"/ecom-product-grid"}>{item.title}</Link>
													</h5>
													<div className="star-review d-flex align-items-center fs-14">
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-gray"></i>
														<i className="fa fa-star text-gray"></i>
														<span className="ms-3 text-dark">(454 revies)</span>
													</div>
												</div>
											</div>
										</td>
										<td>
											<h4 className="my-0 font-w600">{item.quntity}</h4>
										</td>
										<td>
											<h4 className="my-0 font-w600">{item.price}</h4>
										</td>
										<td className="d-md-none d-lg-table-cell">
											<h4 className="my-0 font-w600">{item.totalprice}</h4>
										</td>
										<td>
											<Link to={"#"} onClick={() => handleRemove(item.id)} className="ti-close fs-28 text-danger las la-times-circle">

											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
export default ItemCard;