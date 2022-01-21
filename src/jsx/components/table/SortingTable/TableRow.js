import React, { useState, useRef, useEffect } from 'react';
import { slideDown, slideUp } from './Anim';
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Chart from "react-apexcharts";
import { black } from 'material-ui/styles/colors';
const TableRow = (props) => {

  const [expanded, setExpanded] = useState(false);
  const expanderBody = useRef(null);
  const { row } = props;

  const graphMockup = {
    series: [{
      name: "Floor",
      data: [30, 40, 45, 50, 49, 60, 70]
    }],
    options: {
      chart: {
        height: 220,
        type: "area",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
        },
        background: '#212130'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan"
        ],
        tooltip: {
          enabled: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false,
        }
      },
      theme: {
        mode: 'dark'
      },
      grid: {
        show: false
      },
      dataLabel: {
        enabled: false,
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
          ? <td {...cell.getCellProps()} key={index}> {cell.render('Cell')} </td>
          : <td key={index}>
            <Chart
              options={graphMockup.options}
              series={graphMockup.series}
              type="area"
              height={100}
              width={200}
            />
          </td>
      )}
      <td>
        <Button variant="me-2 btn btn-outline-secondary btn-rounded" onClick={() => toggleExpander()}>
          <span>
            {
              expanded ?
                <i className="bi bi-chevron-down" /> :
                <i className="bi bi-chevron-up" />
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