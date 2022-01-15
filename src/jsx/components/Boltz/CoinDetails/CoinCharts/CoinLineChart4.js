import React from "react";
import ReactApexChart from "react-apexcharts";

class CoinLineChart4 extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
	    series: [{
			data: [300, 300, 100, 250, 350, 500, 400, 400, 200,600]
        },],
		options: {
			chart: {
				height: 350,
				type: "area",
				toolbar:{
					show:false
				},
			},
			dataLabels: {
			  enabled: false
			},
			stroke: {
			  curve: 'smooth'
			},
			xaxis: {
				type: 'Week',
				categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06", "Week 07","Week 08","Week 09","Week 010"],
				labels:{
					show: true,
					style:{
						 colors:'#808080',
					},
			   },
			},
			yaxis: {
				labels: {
					 formatter: function (value) {
					  return value + "k";
					},
					style: {
						colors: '#787878',
						fontSize: '13px',
						fontFamily: 'Poppins',
						fontWeight: 400
					},
				},
			},
			tooltip: {
			  x: {
				format: 'dd/MM/yy HH:mm'
			  },
			},
			colors:['#374C98']
		},
      
    };
  }

	render() {
		return (
			<div id="chart">
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

export default CoinLineChart4;