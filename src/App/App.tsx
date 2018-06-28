import * as React from 'react';
import { Provider, Subscribe } from 'unstated';

import Routes from './../routes/Routes';
import Navbar from './../components/Navbar/Navbar';

import AuthContainer from '../containers/AuthContainer';

import './App.css';


class App extends React.Component {
  private authContainer: AuthContainer;

  constructor(props: any, context: any) {
    super(props, context);

    this.authContainer = new AuthContainer();
  }

  public componentDidMount(): void {
    this.authContainer.getSession();
  }


  public render() {

    return (
      <Provider inject={[this.authContainer]}>
        <div className="app">
          <Subscribe to={[this.authContainer]}>
            {(authContainer) => {
              const { loadingSession, isAuthenticated } = this.authContainer.state;

              return (
                <>
                  {loadingSession &&
                    <div>Loading ...</div>
                  }
                  {!loadingSession &&
                    <>
                      <Navbar />
                      <Routes isAuthenticated={isAuthenticated} />
                    </>
                  }
                </>
              );
            }}
          </Subscribe>
        </div>
      </Provider>
    );
  }
}

export default App;
