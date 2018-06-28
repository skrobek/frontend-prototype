import * as React from 'react';
import { Switch } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import About from './About/About';
import List from './List/List';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';



interface IRoutes {
  isAuthenticated: boolean
};

export default class Routes extends React.Component<IRoutes> {
  public render() {
    const { isAuthenticated } = this.props;

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    );

    return (
      <Router>
        <Switch>
          <PrivateRoute exact={true} path="/" component={List} />
          <Route path="/about" component={About} />
          <Route path="/login">
            <Login isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    )
  }
}