import React from 'react';

const tableDate = [
	{price:'82.3', amount:'10.15', totle:'104,12',	},
	{price:'84.4', amount:'11.16', totle:'107,13',	},
	{price:'86.5', amount:'15.17', totle:'110,14',	},
	{price:'88.6', amount:'16.18', totle:'112,15',	},
	{price:'90.7', amount:'19.19', totle:'114,22',	},
	{price:'92.8', amount:'20.21', totle:'118,23',	},
	{price:'94.9', amount:'21.23', totle:'121,24',	},
	{price:'96.1', amount:'23.25', totle:'125,26',	},
]; 

const OrderData = () =>{
	return(
		<>
			<table className="table text-center bg-primary-hover tr-rounded order-tbl">
				<thead>
					<tr>
						<th className="text-left">Price</th>
						<th className="text-center">Amount</th>
						<th className="text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					{tableDate.map((item,index)=>(
						<tr key={index}>
							<td className="text-left">{item.price}</td>
							<td>{item.amount}</td>
							<td className="text-right">${item.totle}</td>
						</tr>
					))}	
				</tbody>
			</table>
		</>
	)
}
export default OrderData;