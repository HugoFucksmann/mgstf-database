import React, { } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./helpers/protectedRoute";
import Principal from './pages/principal'
import Error404 from "./pages/error404";
import login from './pages/login'

export const mgsfContext = React.createContext();
const data = {data: 'datasaa'};

function App() {
  return (
    <mgsfContext.Provider value={data}>
      <Router>
        <Switch>
          <Route exact from="/" component={login} />
          <ProtectedRoute exact path="/inicio" component={Principal} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </mgsfContext.Provider>
  );
}

export default App;
