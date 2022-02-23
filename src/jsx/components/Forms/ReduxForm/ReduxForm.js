import React, { useState } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import showResults from './ShowResults';
import MaterialUiForm from './MaterialUiForm';
import ListItem from './ListItem';
const ReduxForm = props => {

	const [listData, setListData] = useState([]);
	const [addOptionText, setAddOptionText] = useState('');
	const [valid, setValid] = useState(true);
	const onRemoveItem = (val) => {
		const list = [...listData];
		list.splice(val, 1);
		setListData(list);
	}

	const onAddOption = () => {
		setListData([...listData, addOptionText]);
	}

	const onAddOptionText = (val) => {
		setAddOptionText(val);
	}
	return (
		<>
			<div className="row justify-content-center">
				<div className="col-md-4" >
					<div className="card">
						<div className="card-header">
							<h2 className="card-title">Quick Galance</h2>
						</div>
						<div className="card-body">
							{
								listData.map((item, index) => <ListItem number={index} key={index} name={item} removeItem={(i) => onRemoveItem(i)} />
								)
							}
							<div className="input-group search-area mt-4">
								<input type="text" className="form-control" placeholder="Search Here" value={addOptionText} onChange={(e) => onAddOptionText(e.target.value)}></input>
								<span className="input-group-text">
									<a href="#">
										<i className="flaticon-381-search-2"></i>
									</a>
								</span>
								<button className="col-md-2 btn btn-outline-primary btn-xs " onClick={() => onAddOption()}>+</button>
							</div>
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
