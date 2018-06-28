import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './About/About';
import List from './List/List';
import Login from './Login/Login';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

export default class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <Route exact={true} path="/" component={List} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </>
      </Router>
    )
  }
}