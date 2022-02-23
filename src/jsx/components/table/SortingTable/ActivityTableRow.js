import React, { useState, useRef, useEffect } from 'react';
import { slideDown, slideUp } from './Anim';
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Chart from "react-apexcharts";
import { black } from 'material-ui/styles/colors';
import truncate from 'truncate';
import emptyImage from '../../../../images/discord5.png'
const ActivityTableRow = (props) => {

  const { row } = props;
  return [
    <tr key="main" >
      {/* {row.cells.map((cell, index) =>
        <td {...cell.getCellProps()} key={index}> {cell.render('Cell')} </td>
      )} */}
      <td key='item'>
        <img src={row.values.item ? row.values.item : emptyImage} className="img-fluid" width={100}></img>
      </td>
      <td key='token'>
        <span>{row.values.token}</span>
      </td>

      <td key='type'>
        <div className={`${row.values.type == 'Mint' ? "bg-danger" : ""} ${row.values.type == 'Buy' ? "bg-primary" : ""} ${row.values.type == 'Sell' ? "bg-info text-white" : ""} p-2 text-center`}>
          <span className="fw-bold">{row.values.type}</span>
        </div>
      </td>

      <td key='price'>
        <span>{row.values.price}</span>
      </td>

      <td key='profit'>
        <span>{Number(row.values.profit).toFixed(3)}</span>
      </td>

      <td key='seller'>
        <span>{truncate(row.values.seller, 10)}</span>
      </td>

      <td key='buyer'>
        <span>{truncate((row.values.buyer), 10)}</span>
      </td>

      <td key='date'>
        <span>{row.values.date}</span>
      </td>
    </tr>
  ];
}

export default ActivityTableRow;