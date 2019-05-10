import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import metroLogo from '../../images/logo.png';
import tramImage from '../../images/tranvia-general.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__container">
          <div className="Home__col">
            <img
              src={metroLogo}
              alt="Metro Logo"
              className="img-left"
            />

            <Link className="Home__button btn btn-primary w-50" to="/info">
              Comenzar
            </Link>

          </div>
          <div className="Home__col">
            <img
              src={tramImage}
              alt="tramway"
              className="img-right"
            />
          </div>
        </div>
      </div>
    );
  }
}
