import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={(e) => this.handleChange(e)}
        />
        <button className="SearchButton" onClick={(e) => this.search(e)}>
          SEARCH
        </button>
      </div>
    );
  }
}
export default SearchBar;
