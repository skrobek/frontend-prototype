
import * as React from 'react';
import { Provider } from 'unstated';

import ListContainer from './ListContainer';
import SearchInput from './SearchInput/SearchInput';

import './List.css';
import ListDisplay from './ListDisplay';


class List extends React.Component {
  private listContainer: ListContainer;

  constructor(props: any, context: any) {
    super(props, context);

    this.listContainer = new ListContainer();
  }

  public componentDidMount(): void {
    this.listContainer.fetchPosts();
  }

  public render() {
    return (
      <div className="list">
        <SearchInput />
        <Provider inject={[this.listContainer]}>
          <div>
            <div>
              <div>
                <ListDisplay />
              </div>
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}

export default List;
