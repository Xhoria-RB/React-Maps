import React, { Component } from 'react';
import { capitalize } from 'lodash';

export default class ProvinceData extends Component {
  render() {
    const { name, data, weather, soil } = this.props;

    return (
      <div>
        <h1>
          <strong> {name} </strong>
        </h1>
        <h3>Production</h3>
        {/* Here I need to put the data */}
        <ul>
          {Object.keys(data).map((key) => (
            // key is the property in the data object and data[key] will be the content
            <li key={key}>
              <strong>{capitalize(key).replace('_', ' ') + ': '}</strong>
              {data[key]}
            </li>
          ))}
        </ul>

        <h3>Weather</h3>
        <ul>
          {Object.keys(weather).map((key) => (
            <li>
              <strong>{capitalize(key).replace('_', ' ') + ': '}</strong>
              {weather[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
