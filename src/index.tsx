import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';

import setupAccount from './lib/aws/setupAccount';
import registerServiceWorker from './lib/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

setupAccount();

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

if ((module as any).hot) {
  (module as any).hot.accept();
}
