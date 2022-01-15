import React from "react";
import ReactApexChart from "react-apexcharts";

class CurrentApexBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [{
			  name: 'Buy',
			  data: [44, 55, 57, 56, 61]
			}, {
			  name: 'Sell',
			  data: [76, 85, 101, 98, 87]
			}],
			options: {
				chart: {
					height: 350,
					type: "bar",
					toolbar: {
						show: false,
					},
				},
				plotOptions:{
					bar:{
						horizontal: false,
						columnWidth: '55%',
						endingShape: 'rounded',
						startingShape: "rounded",
						borderRadius: 7,
					}, 
				},
				dataLabels:{
					enabled: false,
				},
				stroke: {
				  show: true,
				  width: 0,
				  colors: ['transparent'],
				  lineCap: 'smooth',
				},
				grid:{
					show: false,
				},
				xaxis: {
					categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
					labels: {
						show: false,
					},
					
					axisBorder:{
					   show: false,	
					},
					axisTicks: {
						show: false,
					},
					
				},
				yaxis: {
					show: false	
				},
				legend:{
					itemMargin: {
					  horizontal: 15,
					  vertical: 0
					},
					 markers:{
						  radius: 12,
					 },
				},
				fill: {
				  opacity: 1
				},
				colors: ['#2258BF', '#FAC438'],
				tooltip: {
					y: {
						formatter: function (val) {
							return "$ " + val + " thousands"
						}
					}
				}
			},
		};
	}

	render() {
		return (
			<div id="chart" className="legent-text">
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

export default CurrentApexBar;