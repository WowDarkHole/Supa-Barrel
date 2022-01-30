import React, { useState, useRef, useEffect } from 'react';
import { slideDown, slideUp } from './Anim';
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Chart from "react-apexcharts";
import { black } from 'material-ui/styles/colors';
const ActivityTableRow = (props) => {

  const { row } = props;

  return [
    <tr key="main" >
      {row.cells.map((cell, index) =>
        <td {...cell.getCellProps()} key={index}> {cell.render('Cell')} </td>
      )}
    </tr>
  ];
}

export default ActivityTableRow;