import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Cycling",
          data: [
            125735,
            126995,
            128293,
            129285,
            132176,
            132700,
            131039,
            128371,
            128527,
            128502,
            128502,
            128502
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 230,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top",
            },
          },
        },
        colors: ["#fd683e"],
        legend: {
          show: false,
          position: "top",
          horizontalAlign: "left",
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: "12px",
            // colors: ["#fff"],
          },
        },
        stroke: {
          show: false,
        },
        yaxis: {
          lines: {
            show: false,
          },
        },

        xaxis: {
          show: false,
          categories: [
            '01/18',
            '01/19',
            '01/20',
            '01/21',
            '01/22',
            '01/23',
            '01/24',
            '01/25',
            '01/25',
            '01/25',
            '01/25',
            '01/25'
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="bar-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
export default ApexBar2;
