import React from "react";
import Home from './Components/Home'
import Form from './Components/Form'
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
      </Switch>
    </div>
  );
};
export default App;
