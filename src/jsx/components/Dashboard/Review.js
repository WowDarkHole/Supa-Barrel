import React from 'react';
import {Link} from 'react-router-dom';

//Images
import rev1 from './../../../images/menu/rev1.jpg';
import rev2 from './../../../images/menu/rev2.jpg';
import rev3 from './../../../images/menu/rev3.jpg';
import rev4 from './../../../images/menu/rev4.jpg';
import rev5 from './../../../images/menu/rev5.jpg';

const CradReviewBlog = [
	{image: rev1,  title: 'Margaretha' },
	{image: rev2,  title: 'David Heree' },
	{image: rev3,  title: 'Louis Jean' },
	{image: rev4,  title: 'Louis Jean' },
	{image: rev5,  title: 'Franklin Junior' },
];

const Review = () =>{
	return(
		<>
			<div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
				<h2 className="mb-3 me-auto">Review</h2>
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item active"><Link to={"#"}>Customer</Link></li>
						<li className="breadcrumb-item"><Link to={"#"}>Review</Link></li>
					</ol>
				</div>
			</div>
			<div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
				<div className="customer-search mb-2">
					<div className="input-group search-area">
						<input type="text" className="form-control" placeholder="Search here......" />
						<span className="input-group-text"><Link to={"#"}>
							<i className="flaticon-381-search-2"></i></Link>
						</span>
					</div>
				</div>
				<div className="d-flex align-items-center flex-wrap">
					<Link to={"#"} className="btn btn-success light border-success btn-rounded me-2  mb-2">
						<i className="far fa-check-circle me-2"></i>PUBLISH
					</Link>
					<Link to={"#"} className="btn btn-danger light border-danger btn-rounded me-2 mb-2">
						<i className="far fa-times-circle me-2"></i>DELETE
					</Link>
					<Link to={"#"} className="btn bg-white btn-rounded me-3 mb-2">
						<i className="fas fa-calendar-times me-2 text-primary"></i>Filter<i className="fas fa-chevron-down ms-2 text-primary"></i>
					</Link>
					<Link to={"#"} className="btn btn-secondary btn-rounded mb-2"><i className="fas fa-sync"></i></Link>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body p-0">
							{CradReviewBlog.map((data,index)=> (
								<div className="card review-table p-0 border-0" key={index}>
									<div className="d-lg-flex  d-block flex-wrap align-items-center py-4   border-bottom side-box">
										<div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
											<div className="media align-items-center review-img">
												<div className="form-check me-lg-4 me-0 ms-4">
												  <input className="form-check-input" type="checkbox" value="" id="customCheckBox6" />
												  <label className="form-check-label" for="customCheckBox6"></label>
												</div>
												<img className="me-3 img-fluid " src={data.image} alt="DexignZone" />
												<div className="card-body p-0">
													<p className="text-primary fs-14 mb-0">#C01234</p>
													<h3 className="fs-20 text-black font-w600 mb-2">{data.title}</h3>
													<span className="text-dark">26/04/2020, 12:42 AM</span>
												</div>
											</div>
										</div>
										<div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
											<p className="mb-0 text-dark">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!
											</p>
										</div>
										<div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 mt-xl-0 mt-3">
											<div className="row align-items-center">
												<div className="text-xl-center start-bx col-xl-7 col-sm-9 col-lg-8 col-6">
													<h2 className="text-black font-w600 mb-0">4.2</h2>
													<div className="star-review2">
														<i className="fa fa-star me-1"></i>
														<i className="fa fa-star me-1"></i>
														<i className="fa fa-star me-1"></i>
														<i className="fa fa-star op5 me-1"></i>
														<i className="fa fa-star op5 me-1"></i>
													</div>
												</div>
												<div className="col-xl-5 col-sm-3 col-lg-4 col-6 text-end check-btn">
													<Link to={"#"} className="text-success fs-14 font-w600 me-3">
														<i className="far fa-check-circle"></i>
													</Link>
													<Link to={"#"} className="text-danger fs-14 font-w600">
														<i className="far fa-times-circle"></i>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="col-xl-12">
					<div className="d-sm-flex d-block align-items-center justify-content-between">
						<h4 className="mb-sm-0 mb-3">Showing 1 to 5 of 5 entries</h4>
						<nav>
							<ul className="pagination">
								<li className="page-item page-indicator">
									<Link to={"#"} className="page-link">
										<i className="la la-angle-left"></i>
									</Link>
								</li>
								<li className="page-item active"><Link to={"#"} className="page-link" >1</Link></li>
								<li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
								<li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
								<li className="page-item"><Link to={"#"} className="page-link" >4</Link></li>
								<li className="page-item page-indicator">
									<Link to={"#"} className="page-link">
										<i className="la la-angle-right"></i>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>		
		</>
	)
}
export default Review;