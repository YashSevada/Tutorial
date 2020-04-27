import React from 'react';
import './App.css';
import Signin from '../src/components/pages/Signin';
import Signup from '../src/components/pages/Signup';
import Forgotpass from '../src/components/pages/Forgotpass';
import PrivateRoute from '../src/components/routes/PrivateRoute';
import Dashboard from '../src/components/dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthState from '../src/components/context/authContext/AuthState';
import ClassState from './components/context/classContext/ClassState';

function App() {
  return (
    <AuthState>
      <ClassState>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Signin} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/forgotpass' component={Forgotpass} />
            </Switch>
          </div>
        </BrowserRouter>
      </ClassState>
    </AuthState>
  );
}

export default App;
