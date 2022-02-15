import React, { useRef, useLayoutEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const AmLineChart = (props) => {
  const chart = useRef(null);
  const [data, setData] = useState(props.data);
  const [date, setDate] = useState(props.date);
  console.log(data, date);
  useLayoutEffect(() => {
    let x = am4core.create(props.id, am4charts.XYChart);

    x.paddingRight = 20;

    // setData(props.data);
    // setDate(props.date);
    console.log('AmChart:', data);
    console.log('AmChart:', date);
    let completeData = [];

    // for (let i = 1; i < 50; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({ date: new Date(2021, 0, i), name: "name" + i, value: visits });
    // }
    for (let i = 0; i < data.length; i++) {
      completeData.push({ date: date[i], name: "name" + i, value: data[i] });
    }

    x.data = completeData;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.fill = am4core.color("#FFF");
    dateAxis.renderer.grid.template.stroke = am4core.color("#FFF");

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.fill = am4core.color("#FFF");
    valueAxis.renderer.grid.template.stroke = am4core.color("#FFF");

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    // series.renderer.label.template.fill = am4core.color("#A0CA92");
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.strokeWidth = 3;
    // series.xAxis.renderer.baseGrid.disabled = true;
    // series.yAxis.renderer.baseGrid.disabled = true;
    // series.columns.template.fill = am4core.color("#104547");
    series.xAxis.stroke = am4core.color("#FFFFFF");
    series.yAxis.stroke = am4core.color("#FFFFFF");
    // series.xAxis.renderer.grid.color = am4core.color("#FFFFFF");
    // series.renderer.grid.template.stroke = "#ff0000";
    // series.ValueAxis.gridColor = am4core.color("#FFFFFF");

    x.cursor = new am4charts.XYCursor();
    x.cursor.lineX.stroke = am4core.color("#FFF");
    x.cursor.lineX.strokeWidth = 2;
    x.cursor.lineX.fill = am4core.color("#FFF");
    x.cursor.lineX.fillOpacity = 0.1;

    x.cursor.lineY.stroke = am4core.color("#FFF");
    x.cursor.lineY.strokeWidth = 2;
    x.cursor.lineY.fill = am4core.color("#FFF");
    x.cursor.lineY.fillOpacity = 0.1;
    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [data, date]);

  return (
    <div id={props.id} style={{ width: "100%", height: "350px", color: "white" }}></div>
  );
}
export default AmLineChart;