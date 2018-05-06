import React from 'react';
import PropTypes from 'prop-types';
import Search from './search';
import List from './list';

const Index = ({ handleSearch, list }) => {
  return (
    <React.Fragment>
      <Search onSearch={handleSearch} />
      <List list={list} />
    </React.Fragment>
  );
}


Index.propTypes = {
  handleSearch: PropTypes.func,
  list: PropTypes.object,
}

export default Index;