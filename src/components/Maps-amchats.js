import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { get } from 'lodash';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_rd from '@amcharts/amcharts4-geodata/dominicanRepublicHigh';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import data from './data.json';

import ProvinceData from './ProvinceData';

export default class MapsAmchats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			provinceName    : '',
			provinceID      : '',
			provinceWeather : '',
			provinceSoil    : '',
			provinceAgrop   : '',
			_provinceData   : {}
		};
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
		polygonTemplate.events.on('hit', (e) => this.getProvinceData(e), this);

		// Create hover state and set alternative fill color
		let hs = polygonTemplate.states.create('hover');
		hs.properties.fill = am4core.color('#3c5bdc');

		map.exporting.menu = new am4core.ExportMenu();
		this.map = map;
	}

	getProvinceData(event) {
		
		this.setState(prevState => ({
			...prevState,
			_provinceData: get(event, 'target._dataItem._dataContext.agrop_use.production', 'No data'),
			provinceName: get(event, 'target._dataItem._dataContext.name', 'No name')
		})
	)}

	componentWillUnmount() {
		if (this.chart) {
			this.chart.dispose();
		}
	}

	render() {
		// polygonTemplate.events.on('hit', this.getProvinceData, this);

		const {_provinceData, provinceName} = this.state;
		return (
			<Container>
				<div id='chartdiv' style={{ width: '100%', height: '500px' }} />
				{provinceName && <ProvinceData name={provinceName} data={_provinceData} />}
			</Container>
		);
	}
}
