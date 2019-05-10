import React from 'react';
import './styles/UpdateTasks.css';
import axios from 'axios';
import  M from 'materialize-css/dist/js/materialize';

class UpdateTasks extends React.Component{
  
  state = {
    description: '',
    selectedFile: null,
    name: ''
  }

  handleChange = e => {
    this.setState({
      selectedFile: e.target.files[0],
      value: e.target.value,
      name: e.target.name
    });
    // console.log(this.state.name);
  }

  handleClick = e =>{
    e.preventDefault();
    const { name, selectedFile } = this.state;
    const formData = new FormData();
  
    // console.log(this.state);

    formData.append(name, selectedFile);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    axios.post("/update/tasks", formData, config)
      .then((res) => {
        console.log("resp from server", res.data);
        M.toast({html: res.data.message, classes: 'ToastSucces'})

      }).catch((error)=>{
        M.toast({html: error, classes: 'ToastFail'})
      });

  }

  render(){
    return (
      <div className="UpdateTasks">
        <div className="UpdateTasks__body">
          <div className="UpdateTasks__header">
            <h1>Actualizar programación</h1>
            <p>Seleccione el archivo que contiene la información</p>
          </div>
          <div className="UpdateTasks__section">
            <form onSubmit={this.handleClick}>
              <div className="custom-file">
                <input name="tasksFile" type="file" onChange={this.handleChange} className="custom-file-input" id="customFile" lang="es"/>
                <label className="custom-file-label" htmlFor="customFile">{this.state.value}</label>
                <button className="btn btn-primary mt-2" type="submit">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateTasks;