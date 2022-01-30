import React, { useState, Fragment } from "react";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

import DailyTrending from '../components/Lezato/Home/DailyTrending';
import TrandingBlog from '../components/Lezato/Home/TrandingBlog';
import CustomersBlog from '../components/Lezato/Home/CustomersBlog';
import News from '../components/Lezato/Card/News';

const MockupData = require('./MockupData1');

const Widget = () => {
  const [valid, setValid] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [tableData, setTableData] = useState(MockupData.default);
  const getSearchResult = (key) => {
    if (key === 'Enter') {
      setValid(true);
      let td = MockupData.default;
      const filterd = td.filter(function (el) {
        const title = el.title.toLowerCase();
        return title.includes(searchValue.toLowerCase());
      });
      setTableData(filterd);
    }
    else console.log('nope');
  }
  return (
    <Fragment>
      <div style={{ height: '50px' }}></div>
      <div className="card">
        <div className="card-body align-items-center justify-content-between">
          <div className="input-group search-area w-100">
            <input type="text"
              className="form-control border-end-0 border-warning display-6 border-yellow height-75 h2 fontsize-25"
              placeholder="Search Collections"
              onChange={(event) => setSearchValue(event.target.value)}
              onKeyDown={(e) => getSearchResult(e.key)} />
            <span className="input-group-text bg-transparent border-warning border-yellow height-75 h2 ">
              <a href="#" onClick={() => getSearchResult("Enter")}>
                <i className="flaticon-381-search-2 fontsize-20"></i>
              </a>
            </span>
          </div>
          <div>
            {valid ? (
              <span></span>
            ) : (<span className="text-danger h4">Can't find Collection Name!</span>)}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0">
                  <div className="justify-content-center">
                    <h1 className="b-1">Notable Collections</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                </div>
                <DailyTrending data={tableData} row={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Widget;
