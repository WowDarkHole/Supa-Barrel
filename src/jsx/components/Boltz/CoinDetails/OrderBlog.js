import React from 'react';
import {Dropdown} from 'react-bootstrap';
const tableBlog = [
	{price:'82.3', amount:'10.15', totle:'104,12',	},
	{price:'84.4', amount:'11.16', totle:'107,13',	},
	{price:'86.5', amount:'15.17', totle:'110,14',	},
	{price:'88.6', amount:'16.18', totle:'112,15',	},
	{price:'90.7', amount:'19.19', totle:'114,22',	},
	{price:'92.8', amount:'20.21', totle:'118,23',	},
	{price:'94.9', amount:'21.23', totle:'121,24',	},
	{price:'96.1', amount:'23.25', totle:'125,26',	},
]; 

const DropDownBlog = ()=>{
	return(
		<>
			<Dropdown className="dropdown custom-dropdown mb-0">
				<Dropdown.Toggle variant="" as="div" className="btn sharp tp-btn dark-btn i-false" >	
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Dropdown.Toggle>	
				<Dropdown.Menu className="dropdown-menu dropdown-menu-right" >
					<Dropdown.Item >Details </Dropdown.Item>
					<Dropdown.Item className="text-danger">Cancel </Dropdown.Item>		
				</Dropdown.Menu>			
			</Dropdown>
		</>
	)
}

function Sellorder(){
	return(
		<>
			<div className="card">
				<div className="card-header border-0 pb-0">
					<h4 className="mb-0 fs-20 text-black">Sell Order</h4>
						<DropDownBlog />
				</div>
				<div className="card-body pt-3 pb-0">
					<div className="table-responsive">
						<table className="table text-center bg-warning-hover tr-rounded order-tbl">
							<thead>
								<tr>
									<th className="text-left">Price</th>
									<th className="text-center">Amount</th>
									<th className="text-right">Total</th>
								</tr>
							</thead>
							<tbody>
								{tableBlog.map((item,index)=>(
									<tr key={index}>
										<td className="text-left">{item.price}</td>
										<td>{item.amount}</td>
										<td className="text-right">${item.totle}</td>
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

function Buyorder(){
	return(
		<>
			<div className="card">
				<div className="card-header border-0 pb-0">
					<h4 className="mb-0 text-black fs-20">Buy Order</h4>
					<DropDownBlog />
				</div>
				<div className="card-body pb-0 pt-3">
					<div className="table-responsive">
						<table className="table text-center bg-warning-hover tr-rounded order-tbl">
							<thead>
								<tr>
									<th className="text-left">Price</th>
									<th className="text-center">Amount</th>
									<th className="text-right">Total</th>
								</tr>
							</thead>
							<tbody>
								{tableBlog.map((item,index)=>(
									<tr key={index}>
										<td className="text-left">{item.price}</td>
										<td>{item.amount}</td>
										<td className="text-right">${item.totle}</td>
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

export  {Sellorder,Buyorder, DropDownBlog} ;