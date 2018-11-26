import React, { Component } from 'react';
import { Container } from 'reactstrap';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_rd from '@amcharts/amcharts4-geodata/dominicanRepublicHigh';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

export default class MapsAmchats extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);

    let map = am4core.create('chartdiv', am4maps.MapChart);
    map.geodata = am4geodata_rd;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    map.series.push(polygonSeries);

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#757575');

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#3c5bdc');

    map.exporting.menu = new am4core.ExportMenu();
    this.map = map;
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <Container>
        <div id='chartdiv' style={{ width: '100%', height: '500px' }} />
      </Container>
    );
  }
}
