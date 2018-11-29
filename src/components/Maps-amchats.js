import React, { Component } from 'react';
import { Container } from 'reactstrap';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_rd from '@amcharts/amcharts4-geodata/dominicanRepublicHigh';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import data from './data.json';
import _ from 'lodash';
export default class MapsAmchats extends Component {
	constructor(props) {
		super();
		this.state = {
			provinceName    : '',
			provinceID      : '',
			provinceWeather : '',
			provinceSoil    : '',
			provinceAgrop   : ''
		};
		this.renderProvince = this.renderProvince.bind(this);
		this.mapData = this.mapData.bind(this);
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
		/**
     *  Todo's (display only and static data): 
     * Agregar form para registrar usuario
     * Agregar registro de parcelas (registradas en su municipio)
     * El usuario debe ser capaz de registrar parcelas y los tipos de suelo
     * Desplegar datos de division administrativa del terreno por parcelas
     */

		/* polygonSeries.data = [
      { id: 'DO-32', name: 'Santo Domingo', agrp: 612.4, mine: 0 }
    ]; */

		// Configure series
		let polygonTemplate = polygonSeries.mapPolygons.template;
		// polygonTemplate.tooltipText = '{name} Agrp: {soil.use.agrp} Temperatura: {weather.main.temp}';
		polygonTemplate.tooltipText = '{name} Agrp: {soil.use.agrp} Temperatura: {agrop_use.production.rice}';
		polygonTemplate.fill = am4core.color('#757575');
		polygonTemplate.events.on(
			'hit',
			(ev) =>
				this.setState((state) => {
					return {
						...state,
						dataProvince    : ev.target._dataItem._dataContext,
						provinceName    : ev.target._dataItem._dataContext.name,
						provinceID      : ev.target._dataItem._dataContext.id,
						provinceWeather : ev.target._dataItem._dataContext.weather,
						provinceSoil    : ev.target._dataItem._dataContext.soil,
						provinceAgrop   : ev.target._dataItem._dataContext.agrop_use
					};
				}),
			this
		);

		// Create hover state and set alternative fill color
		let hs = polygonTemplate.states.create('hover');
		hs.properties.fill = am4core.color('#3c5bdc');

		map.exporting.menu = new am4core.ExportMenu();
		this.map = map;
		console.log(data);
	}
	componentWillUnmount() {
		if (this.chart) {
			this.chart.dispose();
		}
	}

	renderProvince(dataProvince) {
		return (
			<div>
				<h1>
					<span>
						<strong>{this.state.provinceID} </strong>
					</span>{' '}
					{this.state.provinceName}
				</h1>
				<h3>Produccion</h3>
				{this.mapData(this.state.dataProvince)}
			</div>
		);
	}

	mapData(provinceData) {
		console.log(this.state);
	}

	render() {
		return (
			<Container>
				<div id='chartdiv' style={{ width: '100%', height: '500px' }} />
				{this.renderProvince(this.state)}
			</Container>
		);
	}
}
