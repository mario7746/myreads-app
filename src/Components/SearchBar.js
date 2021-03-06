import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class SearchBar extends Component {
    state = {
      query: ''
    };

    componentWillUnmount() {
      this.clearSearchFields();
    };

    onInputChange = e => {
      e.preventDefault();
      const { query } = this.state;
      const value = e.target.value;
      this.setState({query: value});

      !!query.length && value === '' ? (
        this.props.onClear()
      ) : (
        this.props.onSearch(value)
      )
    };

    clearSearchFields = () => {
      this.setState({query: ''});
      this.props.onClear();
    };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={this.onInputChange}
            value={this.state.query}
          />
        </div>
      </div>
    )
  };
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;