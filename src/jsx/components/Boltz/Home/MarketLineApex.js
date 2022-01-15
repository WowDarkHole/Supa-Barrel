import React from "react";
import ReactApexChart from "react-apexcharts";

class MarketLineApex extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: 'series1',
				data: [200, 200, 200, 450, 300, 400, 300,400, 500, 300]
			}, 
			{
				name: 'series2',
				data: [400, 300, 450, 350, 700, 200, 800, 800, 700, 750]
			}],
			options: {
				chart: {
					height: 350,
					type: "line",
					toolbar: {
						show: false,
					},
				},
				colors:["#2258BF","#FF7213"],
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth',
					width: 10,
				},
				legend:{
					show:false
				},
				grid:{
					borderColor: '#AFAFAF',
					strokeDashArray: 10,
				},
				yaxis: {
					labels: {
						style: {
							colors: '#787878',
							fontSize: '13px',
							fontFamily: 'Poppins',
							fontWeight: 400
							
						},
						formatter: function (value) {
						  return value + "k";
						}
					},
				},
				xaxis: {
					categories: ["Week 01","Week 02","Week 03","Week 04","Week 05","Week 06","Week 07","Week 08","Week 09","Week 10"],
					labels:{
						  style: {
							colors: '#787878',
							fontSize: '13px',
							fontFamily: 'Poppins',
							fontWeight: 400
							
						},
					},
					axisBorder:{
						show:false,  
					},
					axisTicks:{
						show: false,
					},
				  
				},
				tooltip: {
					x: {
						format: 'dd/MM/yy HH:mm'
					},
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
				  type="line"
				  height={350}
				/>
			</div>
		);
	}
}

export default MarketLineApex;