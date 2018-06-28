
import * as React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
  public render() {
    return (
      <div className="SearchInput">
        <input type="text" name="search" placeholder="Search..." />
      </div>
    );
  }
}

export default SearchInput;
