import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import TestimonialOwl from './TestimonialOwl';
import {Dropdown} from 'react-bootstrap';

const QuickTransfer = () => {
	const [corrancy3, setCorrancy3] = useState("23,511 LTC");		
	return(
		<>
			<div className="card">
				<div className="card-header d-sm-flex d-block pb-0 border-0">
					<div>
						<h4 className="fs-20 text-black">Quick Transfer</h4>
						<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
					</div>
					
					<Dropdown className="quick-select">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21 0C9.40213 0 0.00012207 9.40201 0.00012207 20.9999C0.00012207 32.5978 9.40213 41.9998 21 41.9998C32.5979 41.9998 41.9999 32.5978 41.9999 20.9999C41.9867 9.4075 32.5924 0.0132751 21 0ZM28.5 31.5001H16.5002C15.6717 31.5001 15.0001 30.8286 15.0001 30C15.0001 29.929 15.0052 29.8581 15.0152 29.7876L16.1441 21.8843L13.864 22.4547C13.7449 22.4849 13.6227 22.5 13.5 22.5C12.6715 22.4991 12.0009 21.8271 12.0013 20.9985C12.0022 20.311 12.4701 19.7122 13.137 19.5447L16.6018 18.6786L18.015 8.78723C18.1321 7.96692 18.892 7.39746 19.7123 7.51465C20.5327 7.63184 21.1021 8.39172 20.9849 9.21204L19.7444 17.8931L25.1364 16.545C25.9388 16.3403 26.755 16.8251 26.9592 17.6276C27.1638 18.43 26.679 19.2462 25.8766 19.4508C25.872 19.4518 25.8674 19.4531 25.8629 19.454L19.2857 21.0983L18.2287 28.4999H28.5C29.3286 28.4999 30.0001 29.1714 30.0001 30C30.0001 30.8281 29.3286 31.5001 28.5 31.5001Z" fill="#5974D5"/>
						</svg>
					
						<Dropdown.Toggle variant="" as="div" className="form-control style-2 default-select cursor-pointer">{corrancy3} </Dropdown.Toggle>
						<Dropdown.Menu >
							<Dropdown.Item onClick={() => setCorrancy3("23,511 LTC")}>23,511 LTC</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("345,455 ETH")}>345,455 ETH</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("789,123 BTH")}>789,123 BTH</Dropdown.Item>
						 </Dropdown.Menu>
					</Dropdown>
						{/* <select className="form-control style-2 default-select">
							<option>23,511 LTC</option>
							<option>345,455 ETH</option>
							<option>789,123 BTH</option>
						</select> */}
					
				</div>
				<div className="card-body">
					<div className="form-wrapper">
						<div className="form-group">
							<div className="input-group input-group-lg">
								<div className="input-group-prepend">
									<span className="input-group-text">Amount BTC</span>
								</div>
								<input type="number" className="form-control" placeholder="742.2" />
							</div>
						</div>
					</div>
					<div className="d-flex mb-3 justify-content-between align-items-center view-link">
						<h4 className="text-black fs-20 mb-0">Recent Contacts</h4>
						<Link to={"#"} className="btn-link">View more</Link>
					</div>
					
					<TestimonialOwl />
					
					<div className="row pt-5 align-items-center">
						<div className="col-sm-6">
							<p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
						</div>
						<div className="col-sm-6">
							<Link to={"#"} className="btn btn-primary d-block btn-lg rounded">TRANSFER NOW</Link>
						</div>
					</div>
				</div>
			</div>
		
		</>
	)
}
export default QuickTransfer;