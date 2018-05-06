import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const SearchInput = Input.Search;

const Search = props => {
  return (
    <div className="search">
      <SearchInput onSearch={props.onSearch} placeholder="Search for book" enterButton="Search" size="large" />
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func,
}

export default Search;

