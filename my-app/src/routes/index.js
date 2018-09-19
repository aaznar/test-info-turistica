import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
/* import '../css/main.css'; */

import Inicio from './patrimonio';
import Patrimonio from './patrimonio';
import Naturaleza from './naturaleza';

const Toolbar = () =>[
    <Link to="/">Inicio</Link>,
    <Link to="/patrimonio">Patrimonio</Link>,
    <Link to="/naturaleza">Naturaleza</Link>,
]

export default ()=>(
    <Router>
        <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/patrimonio" exact component={Patrimonio} />
            <Route path="/naturaleza" exact component={Naturaleza} />
        </Switch>
    </Router>
)