import React, { useState, useRef, useEffect } from 'react';
import { slideDown, slideUp } from './Anim';
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Chart from "react-apexcharts";
const TableRow = (props) => {

  const [expanded, setExpanded] = useState(false);
  const expanderBody = useRef(null);
  const { row } = props;

  const graphMockup = {
    series: [{
      name: "Floor",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 100]
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
          autoSelected: 'pan'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      labels: [1991, 1992, 1993, 1994, 2015, 2016, 2017, 2018, 2019],
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            "<span>" +
            w.globals.labels[dataPointIndex] +
            ": " +
            series[seriesIndex][dataPointIndex] +
            "</span>" +
            "</div>"
          );
        }
      }
    },
  };

  const toggleExpander = () => {
    console.log("!!! toggleExpander");
    if (!expanded) {
      setExpanded(true);
      if (expanderBody) {
        console.log(expanderBody);
        console.log(expanderBody.current);
        // slideDown(expanderBody.current);
      }
    } else {
      setExpanded(false);
      console.log(expanderBody);
      console.log(expanderBody.current);
      // slideUp(expanderBody.current, {
      //   onComplete: () => { setExpanded(false) }
      // });
    }
  }

  // useEffect(() => {
  //   console.log(expanderBody.current);
  // }, [expanderBody]);

  return [
    <tr key="main" >
      {row.cells.map((cell, index) =>
        index !== row?.cells?.length - 1
          ? <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
          : <td>
            <Chart
              options={graphMockup.options}
              series={graphMockup.series}
              type="area"
              height={150}
              width={350}
            />
          </td>
      )}
      <td>
        <Button className="me-2" variant="me-2 btn btn-outline-success btn-rounded" onClick={() => toggleExpander()}>
          <span>
            {
              expanded ?
                <i className="bi bi-arrows-collapse" /> :
                <i className="bi bi-arrows-expand" />
            }
          </span>
        </Button>
      </td>
    </tr>,
    expanded && (
      <tr className="expandable" key="tr-expander">
        <td className="uk-background-muted" colSpan={9}>
          <div ref={expanderBody} className="inner uk-grid">
            <span> Hi! Expanded Successfully! </span>
          </div>
        </td>
      </tr>
    )
  ];
}

export default TableRow;