import React from "react";

import "./styles/TaskList.css";

class TaskListItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.task.semana}</td>
          <td>{this.props.task.fecha}</td>
          <td>{this.props.task.hora_inicio}</td>
          <td>{this.props.task.hora_fin}</td>
          <td>{this.props.task.unidad}</td>
          <td>{this.props.task.via}</td>
          <td>{this.props.task.supervisor}</td>
          <td>{this.props.task.responsable}</td>
          <td>{this.props.task.tarea}</td>
          <td>{this.props.task.orden}</td>
        </tr>
      </React.Fragment>
    );
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <div className="TasksList">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Semana</th>
              <th scope="col">Fecha</th>
              <th scope="col">Inicio</th>
              <th scope="col">Fin</th>
              <th scope="col">Unidad</th>
              <th scope="col">Via</th>
              <th scope="col">Supervisor</th>
              <th scope="col">Responsable</th>
              <th scope="col">Tarea</th>
              <th scope="col">Orden</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.tasks.filter(n => n.fecha === this.props.today).map(task => {
                  return <TaskListItem key={task._id} task={task} />;
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
