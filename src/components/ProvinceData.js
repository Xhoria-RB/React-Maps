import React, { Component } from 'react';

export default class ProvinceData extends Component {

  render() {
    const { name, data } = this.props;
    
    return(
      <div>
				<h1><strong> {name} </strong></h1>
				<h3>Produccion</h3>
        {/* Here I need to put the data */}
        <ul>
          {Object.keys(data).map((key) => (
            // key is the property in the data object and data[key] will be the content
            <li key={key}>{key + ' ' + data[key]}</li>
          ))
          }
          
        </ul>
			</div>
    );
  }
}
