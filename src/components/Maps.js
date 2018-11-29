import React, { Component } from 'react';
import { Container } from 'reactstrap';
import $ from 'jquery';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/usa_states';

export default class Maps extends Component {
  componentDidMount () {
    $('.mapContainer').mapael({
      map : {
        name        : 'usa_states',
        defaultArea : {
          attrs      : {
            stroke         : '#fff',
            'stroke-width' : 1
          },
          attrsHover : {
            'stroke-width' : 2
          }
        },
        tooltip     : { content: '<span style="font-weight:bold;">Nord (59)</span><br />Population : 2617939' }
      }
    });
  }

  render () {
    return (
      <Container>
        <div className='mapContainer'>
          <div className='map'>
            <span>Alternative content for the map</span>
          </div>
        </div>
      </Container>
    );
  }
}
