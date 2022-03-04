import React, { useState, Fragment } from 'react';
import axios from 'axios';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import showResults from './ShowResults';
import MaterialUiForm from './MaterialUiForm';
import { Row, Card, Col, ListGroup, Badge, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { removeStatusValueAction, addStatusValueAction } from '../../../../store/actions/StatusActions';
import { Audio, BallTriangle, TailSpin } from 'react-loader-spinner';
import ListItem from './ListItem';
import StatusBar from '../../../layouts/nav/StatusBar';
const ReduxForm = props => {
	// const statusValue = useSelector((state) => state.statusValue);
	const dispatch = useDispatch();

	const status = useSelector(state => state.status.list);
	const [listData, setListData] = useState(status);
	const [addOptionText, setAddOptionText] = useState('');
	const [searched, setSearched] = useState(false);
	const [listItem, setListItem] = useState([]);
	const [selectedData, setSelectedData] = useState();
	const [loading, setLoading] = useState(false);
	const onRemoveItem = (val) => {
		const list = [...listData];
		list.splice(val, 1);
		setListData(list);
		dispatch(removeStatusValueAction(list));
	}

	const onAddOption = () => {
		const list = [...listData, selectedData];
		setListData(list);
		dispatch(addStatusValueAction(selectedData));
		setAddOptionText('');
		setSelectedData();
	}

	const onAddOptionText = (val) => {
		setAddOptionText(val);
	}

	const searchCollectionNames = async () => {
		setLoading(true);
		const response = await axios.get('https://exodia.io/api/search/' + addOptionText);
		const data = response.data.collections;
		console.log(data);
		setLoading(false);
		setListItem(data);
		setSearched(true);
	}

	const onSelectSearchValue = (val) => {
		setAddOptionText(val.name);
		setSelectedData(val);
		setSearched(false);
	}
	return (
		<>
			<div className="row justify-content-center">
				<div className="col-md-8" >
					<div className="card">
						<div className="card-header">
							<h2 className="card-title">Quick Galance</h2>
						</div>
						<div className="card-body">
							{
								listData.map((item, index) => <ListItem number={index} key={index} name={item.name} removeItem={(i) => onRemoveItem(i)} />
								)
							}
							<div className="input-group search-area mt-4 position-relative">
								<input type="text" className="form-control" placeholder="Search Here" value={addOptionText} onChange={(e) => onAddOptionText(e.target.value)}></input>
								<span className="input-group-text">
									<a href="#" onClick={() => searchCollectionNames()}>
										<i className="flaticon-381-search-2"></i>
									</a>
								</span>
								<button className={`col-md-1 btn btn-outline-primary btn-xs ${selectedData ? "" : "disabled"}`} onClick={() => onAddOption()}>+</button>
							</div>

							{loading ? (<div className="justify-content-center d-flex pt-2">
								<Audio color="#eeb417" height={50} width={50} />
							</div>) : <div></div>}

							{searched ?
								<Col>
									<Card>
										<div className="basic-list-group">
											<ListGroup>
												{listItem.map((list, i) => (
													<Fragment key={i}>

														<ListGroup.Item action className="text-white fs-5" onClick={() => onSelectSearchValue(list)}>
															<div>
																<img src={list.imageUrl} width={50}></img>
																<span className="ps-5">{list.name}</span>
															</div>
														</ListGroup.Item>
													</Fragment>
												))}
											</ListGroup>
										</div>
									</Card>
								</Col> : <div></div>}
							{/* <div className="d-flex justify-content-between mt-4">
								<input className="col-md-9" type="text" value={addOptionText} onChange={(e) => onAddOptionText(e.target.value)}></input>
								<button className="col-md-2 btn btn-outline-primary btn-xs " onClick={() => onAddOption()}>Add</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ReduxForm;	
