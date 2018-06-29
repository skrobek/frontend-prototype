
import * as React from 'react';
import { Subscribe } from 'unstated';

import ListContainer from '../../containers/ListContainer';


class ListDisplay extends React.Component {
  public render() {
    return (
      <Subscribe to={[ListContainer]}>
        {(container): JSX.Element => (
          <div>
            {container.state.posts.length}
          </div>
        )}
      </Subscribe>
    );
  }
}

export default ListDisplay;
