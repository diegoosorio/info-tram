
import React from 'react';
import * as moment from 'moment';
import 'moment/locale/es';
import './styles/Cero.css';
import axios from 'axios';

const butterfly = require('../../images/butterfly.svg');


class Cero extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      hoy: "",
      ultimoAccidente: "",
      dias: "0"
    }

    // const listaAccidentes = this.props.listaAccidentes;
    // console.log("Accidentes", listaAccidentes);

  }

  componentDidMount() {

    this.intervalId = setInterval(() => { 
      this.setState({
        hoy: moment().format('LL, h:mm:ss a')
      })
    }, 1000);
    
    axios
    .get("/api/cero")
    .then(response => {
      // handle success
      const listaAccidentes = response.data.data;
      const n = listaAccidentes.length;
      const ultimoDato = listaAccidentes[n-1].fecha_accidente;
      console.log(n, ultimoDato)
      const hoy = moment(moment(),"DD/MM/YYYY");
      const ultimoAccidente = moment(ultimoDato, "DD/MM/YYYY")
      this.setState({
        dias: hoy.diff(ultimoAccidente, 'days'),
        ultimoAccidente: ultimoAccidente.format("DD/MM/YYYY")
      });
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
    
    // const n = this.state.data.length;
    // const ultimoAccidente = this.state.data[n-1].fecha
    // const hoy = moment(moment(),"DD/MM/YYYY");
    // const ultimo = moment(ultimoAccidente, "DD/MM/YYYY")
    
    // this.setState({
    //   dias: hoy.diff(ultimo, 'days'),
    //   ultimoAccidente
    // })
  }
  
  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.intervalId);
  }
  
  render(){
    return(
      <div className="Cero__container">
        <div className="Cero__body">
          <div className="Cero__header">
            <time>{this.state.hoy}</time>
          </div>
          <div className="Cero__section">
            <time>{this.state.dias}</time>
            <p>días sin accidentes</p>
            <img src={butterfly} className="Cero__butterfly" alt=""/>
          </div>
          <div className="Cero__footer">
            <small className="text-muted">Ultimo accidente <time>{this.state.ultimoAccidente}</time></small>
          </div>
        </div>
      </div>
    )
  }
}

export default Cero;