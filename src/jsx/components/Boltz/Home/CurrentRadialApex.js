import React from "react";
import ReactApexChart from "react-apexcharts";

class CurrentRadialApex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	    series: [85, 60, 67, 50],
		options: {
			chart: {
				height: 350,
				type: "radialBar",
			},
			plotOptions: {
				radialBar: {
					startAngle:-90,
					endAngle: 90,
					dataLabels: {
						name: {
							fontSize: '22px',
						},
						value: {
							fontSize: '16px',
						},
					},
				},
			},
			stroke:{
				lineCap: 'round',
			},
			labels: ['Income', 'Income', 'Imcome', 'Income'],
			colors:['#FFAF65', '#4441DE','#60C695','#F34F80'],
		},
      
    };
  }

	render() {
		return (
			<div id="chart" >
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="radialBar"
				  height={350}
				/>
			</div>
		);
	}
}

export default CurrentRadialApex;