import React, { Component } from 'react';
import municipies from './municipies.json';
import { capitalize } from 'lodash';

export default class Parcels extends Component {
  render() {
    const { id } = this.props;
    const municName = municipies.filter((mun) => mun.province_id === id);
    return (
      <div>
        <select>{municName.map((name, index) => <option key={index}>{capitalize(name.municipies)}</option>)}</select>
      </div>
    );
  }
}
