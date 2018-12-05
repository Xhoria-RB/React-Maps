import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { get } from 'lodash';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_rd from '@amcharts/amcharts4-geodata/dominicanRepublicLow';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import data from './data.json';

import ProvinceData from './ProvinceData';
import Parcels from './Parcels.js';

export default class MapsAmchats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinceName    : '',
      provinceID      : '',
      provinceWeather : {},
      provinceSoil    : {},
      provinceAgrop   : {},
      _provinceData   : {},
      isData          : true
    };
    this.toggle = this.toggle.bind(this);
    this.renderData = this.renderData.bind(this);
  }

  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);

    let map = am4core.create('chartdiv', am4maps.MapChart);
    map.geodata = am4geodata_rd;
    map.projection = new am4maps.projections.Miller();

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    map.series.push(polygonSeries);

    polygonSeries.data = data.provincias;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = '{name} Agrp: {soil.use.agrp} Temperatura: {weather.main.temp}';
    polygonTemplate.tooltipText = '{name} Temperatura: {weather.main.temp} Celcius';
    polygonTemplate.fill = am4core.color('#757575');
    polygonTemplate.events.on('hit', (e) => this.getProvinceData(e), this);

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#317ef9');

    map.exporting.menu = new am4core.ExportMenu();
    this.map = map;
  }

  getProvinceData(event) {
    this.setState((prevState) => ({
      ...prevState,
      _provinceData   : get(event, 'target._dataItem._dataContext.agrop_use.production', 'No data'),
      provinceName    : get(event, 'target._dataItem._dataContext.name', 'No name'),
      provinceSoil    : get(event, 'target._dataItem._dataContext.soil.use', 'No soil data'),
      provinceWeather : get(event, 'target._dataItem._dataContext.weather.main', 'No weather data'),
      provinceID      : get(event, 'target._dataItem._dataContext.id', 'No id')
    }));
  }
  toggle() {
    this.setState((prevState) => ({
      ...prevState,
      isData : !this.state.isData
    }));
  }

  renderData({ _provinceData, provinceName, provinceSoil, provinceWeather, provinceID } = this.state) {
    if (this.state.provinceID == '') {
      return <h1>Select a province to see the data</h1>;
    } else {
      return this.state.isData ? (
        <ProvinceData name={provinceName} data={_provinceData} weather={provinceWeather} soil={provinceSoil} />
      ) : (
        <Parcels id={provinceID} />
      );
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    // polygonTemplate.events.on('hit', this.getProvinceData, this);
    // {provinceName && (
    // <ProvinceData name={provinceName} data={_provinceData} weather={provinceWeather} soil={provinceSoil} />
    // )}

    // const { _provinceData, provinceName, provinceSoil, provinceWeather, provinceID } = this.state;
    return (
      <Container>
        <div id='chartdiv' style={{ width: '100%', height: '500px' }} />
        <Row>
          <Col sm='12' md={{ size: 6, offset: 3 }}>
            <Button className='btn btn-large btn-block my-2' color={this.state.btnColor} onClick={this.toggle}>
              Change
            </Button>
          </Col>
        </Row>
        <Container className='my-2'>{this.renderData()}</Container>
      </Container>
    );
  }
}
