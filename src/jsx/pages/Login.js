import React, { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {
	loadingToggleAction,
	loginAction,
} from '../../store/actions/AuthActions';
// image
import logo2 from "../../images/logo-full-white.png";
import login from "../../images/login-bg-1.jpg";

function Login(props) {
	const [email, setEmail] = useState('demo@demo.com');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('123456');

	const dispatch = useDispatch();
	//setEmail('');
	//setPassword('123456');
	function onLogin(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) {
			return;
		}
		dispatch(loadingToggleAction(true));
		dispatch(loginAction(email, password, props.history));
	}

	return (
		<div className="login-wrapper">
			<div className="login-aside-left" style={{ backgroundImage: "url(" + login + ")" }}>
				<Link to="/" className="login-logo">
					<img src={logo2} alt="" />
				</Link>
				<div className="login-description">
					<h2 className="text-white mb-4">Check the Status</h2>
					<p className="fs-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
					<ul className="social-icons mt-4">
						<li><Link to={"#"}><i className="fab fa-facebook-f"></i></Link></li>
						<li><Link to={"#"}><i className="fab fa-twitter"></i></Link></li>
						<li><Link to={"#"}><i className="fab fa-linkedin-in"></i></Link></li>
					</ul>
					<div className="mt-5">
						<Link to={"#"} className="text-white mr-4">Privacy Policy</Link>
						<Link to={"#"} className="text-white mr-4">Contact</Link>
						<Link to={"#"} className="text-white">© 2021 DexignZone</Link>
					</div>
				</div>
			</div>
			<div className="login-aside-right">
				<div className="row m-0 justify-content-center h-100 align-items-center">
					<div className="col-xl-6 col-xxl-8">
						<div className="authincation-content">
							<div className="row no-gutters">
								<div className="col-xl-12">
									<div className="auth-form">
										<div className=" mb-3">
											{ /*  <Link to="/">
								<img src={logo} alt="" />
                            </Link> */}
											<h2 className="text-primary">Welcome to Ventic</h2>
										</div>
										<h4 className=" mb-4 ">Sign in by entering information below</h4>
										{props.errorMessage && (
											<div className='text-danger'>
												{props.errorMessage}
											</div>
										)}
										{props.successMessage && (
											<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
												{props.successMessage}
											</div>
										)}
										<form onSubmit={onLogin}>
											<div className="form-group mb-3">
												<label className="mb-2 ">
													<strong>Email</strong>
												</label>
												<input type="email" className="form-control"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												//defaultValue="abcd@gmail.com"
												/>
												{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
											</div>
											<div className="form-group mb-3">
												<label className="mb-2 "><strong>Password</strong></label>
												<input
													type="password"
													className="form-control"
													value={password}
													onChange={(e) =>
														setPassword(e.target.value)
													}
												/>
												{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
											</div>
											<div className="form-row d-flex justify-content-between mt-4 mb-2">
												<div className="form-group mb-3">
													<div className="form-check custom-checkbox ml-1 ">
														<input
															type="checkbox"
															className="form-check-input"
															id="basic_checkbox_1"
														/>
														<label
															className="form-check-label"
															htmlFor="basic_checkbox_1"
														>
															Remember my preference
														</label>
													</div>
												</div>
												{/* <div className="form-group">
								  <Link className="text-primary" to="page-forgot-password">
									Forgot Password ?
								  </Link>
								</div> */}
											</div>
											<div className="text-center">
												<button
													type="submit"
													className="btn btn-primary btn-block"
												>
													Sign In
												</button>
											</div>
										</form>
										<div className="new-account mt-3">
											<p className="">
												Don't have an account?{" "}
												<Link className="text-primary" to="./page-register">
													Sign up
												</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log('state');
	console.log(state);
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};
export default connect(mapStateToProps)(Login);
