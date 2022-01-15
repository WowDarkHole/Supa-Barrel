import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

function CardBlog(){
	return(
		<>
			<div className="card-body">
				<div className="basic-form">
					<form className="form-wrapper">
						<div className="form-group">
							<div className="input-group input-group-lg">
								<div className="input-group-prepend">
									<span className="input-group-text">Amount BTC</span>
								</div>
								<input type="number" className="form-control" placeholder="52.5" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-lg">
								<div className="input-group-prepend">
									<span className="input-group-text ">Price BPL</span>
								</div>
								<input type="number" className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-lg">
								<div className="input-group-prepend">
									<span className="input-group-text">Fee (1%)</span>
								</div>
								<input type="number" className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-lg">
								<div className="input-group-prepend">
									<span className="input-group-text">Total BPL</span>
								</div>
								<input type="number" className="form-control" />
							</div>
						</div>
						<div className="row mt-4 align-items-center">
							<div className="col-lg-6">
								<div>
									<p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="d-flex justify-content-end">
									<Link to={"#"} className="btn  btn-success text-white rounded">
									BUY
										<svg className="ms-4 scale3" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z" fill="white" stroke="white"></path>
										</svg>
									</Link>
									<Link to={"#"} className="btn btn-danger ms-3 rounded">
									SELL
										<svg className="ms-4 scale5" width="16" height="16" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z" fill="white" stroke="white"></path>
										</svg>
									</Link>
								</div>	
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

const QuickTradeTab1 = () =>{
	const [corrancy3, setCorrancy3] = useState("23,511 LTC");	
	return(
		<>
			<div className="card">
				<div className="card-header d-sm-flex d-block pb-0 border-0">
					<div>
						<h4 className="fs-20 text-black">Quick Trade</h4>
						<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
					</div>
					<Dropdown className="quick-select rounded">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"/>
							<path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.1569 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"/>
							<path d="M21 9.15527e-05C9.40213 9.15527e-05 0.00012207 9.4021 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9867 9.40759 32.5924 0.0133667 21 9.15527e-05ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4997V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1717 34.4999 22.5001 33.8284 22.5001 32.9998V31.4997H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1718 34.4999 16.5002 33.8284 16.5002 32.9998V31.4997H12.0004C11.1718 31.4997 10.5003 30.8282 10.5003 30.0001C10.5003 29.1715 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00018C16.5002 8.17163 17.1718 7.50009 18.0003 7.50009C18.8289 7.50009 19.5004 8.17163 19.5004 9.00018V10.4998H22.5001V9.00018C22.5001 8.17163 23.1717 7.50009 24.0002 7.50009C24.8288 7.50009 25.5003 8.17163 25.5003 9.00018V10.4998C28.7999 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7376 22.1279 31.4943 23.7699 31.5002 25.4998Z" fill="#FFAB2D"/>
						</svg>
						<Dropdown.Toggle variant="" as="div" className="form-control style-2 default-select">{corrancy3} </Dropdown.Toggle>
						<Dropdown.Menu >
							<Dropdown.Item onClick={() => setCorrancy3("23,511 LTC")}>23,511 LTC</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("345,455 ETH")}>345,455 ETH</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("789,123 BTH")}>789,123 BTH</Dropdown.Item>
						 </Dropdown.Menu>
					</Dropdown>
				</div>
				<CardBlog />
			</div>
		</>
	)
}
const QuickTradeTab2 = () =>{
	const [corrancy3, setCorrancy3] = useState("23,511 LTC");	
	return(
		<>
			<div className="card">
				<div className="card-header d-sm-flex d-block pb-0 border-0">
					<div>
						<h4 className="fs-20 text-black">Quick Trade</h4>
						<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
					</div>
					<Dropdown className="quick-select rounded">
						<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="21.75" cy="21.25" r="21.25" fill="white"/>
							<path d="M22.1351 0.003555C10.3941 -0.208953 0.716063 9.13256 0.503555 20.8648C0.291047 32.597 9.63256 42.2839 21.3648 42.4964C33.097 42.7089 42.7839 33.3674 42.9964 21.6263C43.2089 9.89405 33.8674 0.207209 22.1351 0.003555ZM21.4356 38.5119C11.917 38.3348 4.311 30.4542 4.48809 20.9356C4.65632 11.417 12.5368 3.811 22.0555 3.97923C31.5829 4.15632 39.1801 12.0368 39.0119 21.5555C38.8436 31.0741 30.9542 38.6801 21.4356 38.5119Z" fill="#627EEA"/>
							<path d="M22.0307 5.75368C13.486 5.60315 6.41129 12.43 6.26076 20.9746C6.10138 29.5104 12.9282 36.5851 21.4728 36.7445C30.0174 36.895 37.0922 30.0682 37.2427 21.5324C37.3933 12.9878 30.5753 5.91306 22.0307 5.75368ZM21.7517 10.1703L26.6757 18.9549L22.1821 16.4544C21.9138 16.3056 21.5888 16.3056 21.3205 16.4544L16.8269 18.9549L21.7517 10.1703ZM21.7517 32.327L16.8269 23.5424L21.3205 26.0429C21.4542 26.1173 21.603 26.1545 21.7509 26.1545C21.8987 26.1545 22.0475 26.1173 22.1812 26.0429L26.6749 23.5424L21.7517 32.327ZM21.7517 24.2552L16.3469 21.2482L21.7517 18.2412L27.1557 21.2482L21.7517 24.2552Z" fill="#627EEA"/>
						</svg>
						<Dropdown.Toggle variant="" as="div" className="form-control style-2 default-select">{corrancy3} </Dropdown.Toggle>
						<Dropdown.Menu >
							<Dropdown.Item onClick={() => setCorrancy3("23,511 LTC")}>23,511 LTC</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("345,455 ETH")}>345,455 ETH</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("789,123 BTH")}>789,123 BTH</Dropdown.Item>
						 </Dropdown.Menu>
					</Dropdown>
				</div>
				<CardBlog />
			</div>
		</>
	)
}
const QuickTradeTab3 = () =>{
	const [corrancy3, setCorrancy3] = useState("23,511 LTC");	
	return(
		<>
			<div className="card">
				<div className="card-header d-sm-flex d-block pb-0 border-0">
					<div>
						<h4 className="fs-20 text-black">Quick Trade</h4>
						<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
					</div>
					<Dropdown className="quick-select rounded">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.3783 0.00330924C9.79689 -0.200659 0.207756 9.04988 0.00373179 20.628C-0.0646763 24.2707 0.810227 27.7153 2.39681 30.7341H8.99879V10.0661C8.99879 8.80272 10.7162 8.40078 11.2743 9.5346L21.0002 29.2247L30.7262 9.5358C31.2842 8.40078 33.0016 8.80272 33.0016 10.0661V30.7341H39.5832C41.0594 27.9289 41.9379 24.7614 41.9967 21.3839C42.2007 9.80576 32.9596 0.219275 21.3783 0.00330924Z" fill="#FF782C"/>
							<path d="M30.6013 31.9339V15.2061L22.0755 32.4654C21.6723 33.2848 20.3269 33.2848 19.9237 32.4654L11.3991 15.2061V31.9339C11.3991 32.5962 10.8626 33.1337 10.1989 33.1337H3.89699C7.63063 38.378 13.7009 41.8671 20.6222 41.9967C27.8194 42.1239 34.2426 38.5964 38.1274 33.1337H31.8015C31.1378 33.1337 30.6013 32.5962 30.6013 31.9339Z" fill="#FF782C"/>
						</svg>
						<Dropdown.Toggle variant="" as="div" className="form-control style-2 default-select">{corrancy3} </Dropdown.Toggle>
						<Dropdown.Menu >
							<Dropdown.Item onClick={() => setCorrancy3("23,511 LTC")}>23,511 LTC</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("345,455 ETH")}>345,455 ETH</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("789,123 BTH")}>789,123 BTH</Dropdown.Item>
						 </Dropdown.Menu>
					</Dropdown>
				</div>
				<CardBlog />
			</div>
		</>
	)
}
const QuickTradeTab4 = () =>{
	const [corrancy3, setCorrancy3] = useState("23,511 LTC");	
	return(
		<>
			<div className="card">
				<div className="card-header d-sm-flex d-block pb-0 border-0">
					<div>
						<h4 className="fs-20 text-black">Quick Trade</h4>
						<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
					</div>
					<Dropdown className="quick-select rounded">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21 0C9.40205 0 0 9.40205 0 21C0 32.598 9.40205 42 21 42C32.598 42 42 32.598 42 21C41.9867 9.40754 32.5925 0.0132752 21 0V0ZM28.5 31.5002H16.5002C15.6716 31.5002 15.0001 30.8287 15.0001 30.0001C15.0001 29.9292 15.0051 29.8582 15.0152 29.7877L16.144 21.8844L13.8639 22.4548C13.7449 22.485 13.6226 22.5001 13.5 22.5001C12.6714 22.4992 12.0008 21.8272 12.0012 20.9986C12.0022 20.3111 12.47 19.7123 13.137 19.5448L16.6018 18.6787L18.0149 8.78727C18.1321 7.96695 18.892 7.39749 19.7123 7.51468C20.5326 7.63187 21.1021 8.39176 20.9849 9.21208L19.7443 17.8931L25.1364 16.545C25.9388 16.3404 26.755 16.8252 26.9592 17.6276C27.1638 18.4301 26.679 19.2463 25.8766 19.4509C25.872 19.4518 25.8674 19.4532 25.8628 19.4541L19.2857 21.0984L18.2287 28.5H28.5C29.3286 28.5 30.0001 29.1716 30.0001 30.0001C30.0001 30.8282 29.3286 31.5002 28.5 31.5002Z" fill="#374C98"/>
						</svg>
						<Dropdown.Toggle variant="" as="div" className="form-control style-2 default-select">{corrancy3} </Dropdown.Toggle>
						<Dropdown.Menu >
							<Dropdown.Item onClick={() => setCorrancy3("23,511 LTC")}>23,511 LTC</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("345,455 ETH")}>345,455 ETH</Dropdown.Item>
							<Dropdown.Item onClick={() => setCorrancy3("789,123 BTH")}>789,123 BTH</Dropdown.Item>
						 </Dropdown.Menu>
					</Dropdown>
				</div>
				<CardBlog />
			</div>
		</>
	)
}
export {QuickTradeTab1,QuickTradeTab2,QuickTradeTab3,QuickTradeTab4, };