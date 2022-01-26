import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const AmLineChart = (props) => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create(props.id, am4charts.XYChart);

    x.paddingRight = 20;

    let data = [];
    let visits = 10;

    for (let i = 1; i < 50; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2021, 0, i), name: "name" + i, value: visits });
    }

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    // series.renderer.label.template.fill = am4core.color("#A0CA92");
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.strokeWidth = 3;
    series.xAxis.stroke = am4core.color("#FFFFFF");
    series.yAxis.stroke = am4core.color("#FFFFFF");
    series.xAxis.renderer.grid.color = am4core.color("#FFFFFF");
    // series.renderer.grid.template.stroke = "#ff0000";
    // series.ValueAxis.gridColor = am4core.color("#FFFFFF");

    x.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id={props.id} style={{ width: "100%", height: "350px", color: "white" }}></div>
  );
}
export default AmLineChart;