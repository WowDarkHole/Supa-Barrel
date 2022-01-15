import React from "react";
import ReactApexChart from "react-apexcharts";

class SummarApexBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
			  name: 'PRODUCT A',
			  data: [44, 55, 41, 67, 22, 43, 21]
			}, {
			  name: 'PRODUCT B',
			  data: [13, 23, 20, 8, 13, 27, 33]
			}, {
			  name: 'PRODUCT C',
			  data: [11, 17, 15, 15, 21, 14, 15]
			}],
			options: {
				chart: {
					height: 150,
					type: "bar",
					stacked: true,
					stackType: '100%',
					toolbar: {
						show: false,
					},
				},
				plotOptions:{
				bar:{
						columnWidth: '25%',
						endingShape: "rounded",
						startingShape: "rounded",
						borderRadius: 4,
						colors:{
							 //backgroundBarColors:['#13b440','#ff9574','#c4c4c4'],
							 backgroundBarOpacity: 1,
							  backgroundBarRadius: 5,
						},
						
					}, 
				},
				grid:{
					  show: false,
				},
				colors:['#13b440','#ff9574','#c4c4c4'],
				dataLabels:{
					 enabled: false,
				},
				responsive: [{
			  breakpoint: 480,
			  options: {
				legend: {
				  position: 'bottom',
				  offsetX: -10,
				  offsetY: 0
				}
			  }
			}],
			xaxis: {
				categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI','SAT'],
			   axisBorder: {
				   show: false,
			   },
			    axisTicks:{
					  show: false,
				},
			},
			yaxis:{
				 show: false,
			},
			fill: {
			  opacity: 1
			},
			legend: {
			  position: 'right',
			  offsetX: 0,
			  offsetY: 50,
			  show:false
			},
			},
		};
	}

	render() {
		return (
			<div id="chart">
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="bar"
				  height={150}
				/>
			</div>
		);
	}
}

export default SummarApexBar;