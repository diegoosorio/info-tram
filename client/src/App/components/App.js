import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Info from '../pages/Info';
import Update from '../pages/Update'
import UpdateTasks from '../pages/UpdateTasks';
import UpdateCero from '../pages/UpdateCero';
import UpdateTramways from '../pages/UpdateTramways';

function App () {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/update/updatetasks" component={UpdateTasks} />
          <Route exact path="/update/updatetramways" component={UpdateTramways} />
          <Route exact path="/update/updatecero" component={UpdateCero} />
        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
