import React from "react";
import { Link } from "react-router-dom";

import "./styles/Info.css";
import TaskList from "../components/TaskList";
import TramwayList from "../components/TramwayList";
import Cero from "../components/Cero";
import axios from "axios";
import moment from "moment";

// import tramways from '../../server/tramways.json';
// import tasks from '../../server/tasks.json';

class Info extends React.Component {
  state = {
    tasks: [],
    tramways: [],
    today: ""
  };

  constructor(props) {
    super(props);
    console.log("1. constructor()");
  }

  componentDidMount(){
    this.setState({
      today: moment().format("DD/MM/YYYY")
    });
    axios
      .get("/api/tasks")
      .then(response => {
        // handle success
        const tasks = response.data.data;
        // console.log(tasks);
        this.setState({
          tasks
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    axios
      .get("/api/tramways")
      .then(response => {
        // handle success
        const tramways = response.data.data;
        // console.log(tramways);
        this.setState({
          tramways
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    console.log("2/4. render()");
    return (
      <React.Fragment>
        <div className="Info">
          <div className="Dashboard">
            <TaskList
              className="TaskList"
              tasks={this.state.tasks}
              today={this.state.today}
            />
          </div>
          <div className="Right-aside">
            <div className="Zero">
              {/* {
                
                console.log("accidentes", this.state.listaAccidentes)
              } */}
              <Cero />
            </div>
            <div className="Explotacion">
              {/* <TramwayList tramways={this.state.tramways} /> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
