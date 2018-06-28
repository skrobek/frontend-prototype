import * as React from 'react';
import { Provider } from 'unstated';

import Routes from './../routes/Routes';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Provider>
        <div className="app">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
