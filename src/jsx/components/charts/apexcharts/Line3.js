import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Running",
          data: this.props.data,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          width: [4],
          colors: ["#EEB417"],
          curve: "straight",
        },

        xaxis: {
          type: "text",
          categories: this.props.date,
        },

        colors: ["#EEB417"],
        markers: {
          size: [6],
          strokeWidth: [4],
          strokeColors: ["#EEB417"],
          border: 0,
          colors: ["#fff"],
          hover: {
            size: 10,
          },
        },
        yaxis: {
          title: {
            text: "",
          },
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
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default ApexLine3;
