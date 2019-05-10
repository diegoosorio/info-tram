import React from "react";
import axios from "axios";
import "./styles/UpdateCero.css";
import * as moment from "moment";
import "moment/locale/es";
import M from "materialize-css/dist/js/materialize";

const today = moment().format("YYYY-MM-DD");

class UpdateCero extends React.Component {
  state = {
    fechaAccidente: ""
  };

  handleChange = e => {
    const fechaAccidente = e.target.value;
    console.log(fechaAccidente);
    this.setState({
      fechaAccidente
    });
  };

  handleClick = e => {
    e.preventDefault();
    const fechaAccidente = moment(
      document.getElementById("fecha").value
    ).format("DD/MM/YYYY");
    // console.log(fechaAccidente);
    this.setState({
      fechaAccidente
    });

    axios
      .post("/update/cero", [{ fecha_accidente: fechaAccidente }])
      .then(res => {
        console.log(res);
        M.toast({ html: res.data.message, classes: "ToastSucces" });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="UpdateCero">
        <div className="UpdateCero__body">
          <div className="UpdateCero__header">
            <h1>Accidente laboral</h1>
            <p>Ingrese la fecha del ultimo accidente</p>
          </div>
          <div className="UpdateCero__section">
            <form>
              <div className="form-row">
                <div className="col">
                  <input
                    type="date"
                    id="fecha"
                    className="form-control"
                    defaultValue={today}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="UpdateCero_footer">
            <button
              className="btn btn-primary mt-2"
              type="submit"
              onClick={this.handleClick}
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateCero;
