import React from 'react';

import './styles/TramwayList.css'

class TramwayListItem extends React.Component {
  render(){
    return(
      <tr>
        <td>{this.props.tramway.fecha}</td>
        { this.props.tramway.estado === 'disponible' && 
            <td className="Disponible cw">{this.props.tramway.unidad}</td>
        } {
          this.props.tramway.estado === 'no disponible' && 
            <td className="Inactiva cw">{this.props.tramway.unidad}</td>
        } {
          this.props.tramway.estado === 'mantenimiento' && 
            <td className="Mantenimiento cw">{this.props.tramway.unidad}</td>
        }
        <td>{this.props.tramway.kilometraje}</td>
      </tr>
    ); 
  }
}

class TramwayList extends React.Component {
  render(){
    return (
      <div className="Tramway__list">
        <table className="Tramway__listtable">
          <thead className="">
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Unidad</th>
              <th scope="col">Km</th>
              {/* <th scope="col">Estado</th> */}
            </tr>
          </thead>
          <tbody>
          {this.props.tramways.map(tramway => {
            return (
              <TramwayListItem key={tramway._id} tramway={tramway} />
            );
          })}
          </tbody>
        </table>  
      </div>
    );
  }
}


export default TramwayList;