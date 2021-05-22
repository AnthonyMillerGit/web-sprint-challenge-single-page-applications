import React from "react";
import Home from './Components/Home'
import Form from './Components/Form'
import Confirm from './Components/Confirm'
import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/Form'>
          <Form />
        </Route>

        <Route path='/Confirm'>
          <Confirm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
