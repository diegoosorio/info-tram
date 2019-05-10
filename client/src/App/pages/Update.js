import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Update.css';

class Update extends React.Component {
  render(){
    return (
      <div className="Update">
        <div className="grid-container">
          <Link className="item item-1 Update__button" to="/update/updatetasks">
            Actualizar programación
          </Link>
          <Link className="item item-2 Update__button" to="/update/updatetramways">
            Actualizar explotación
          </Link>
          <Link className="item item-3 Update__button" to="/update/updatecero">
            Actualizar ruta cero
          </Link>
        </div>
      </div>
    );
  }
}

export default Update;