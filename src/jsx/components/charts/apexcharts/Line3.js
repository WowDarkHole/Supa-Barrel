import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Running",
          data: [
            10200,
            10400,
            10200,
            10800,
            10400,
            11000,
            10200,
            10600,
            10600,
            11000,
            11010,
            10600,
            12573,
            12699,
            12829,
            12928,
            13217,
            13270,
            13103,
            12837,
            12852,
            12850,
            12850,
            12850],
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
          colors: ["#fd683e"],
          curve: "straight",
        },

        xaxis: {
          type: "text",
          categories: [
            "Jan",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],

        },

        colors: ["#fd683e"],
        markers: {
          size: [6],
          strokeWidth: [4],
          strokeColors: ["#fd683e"],
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
