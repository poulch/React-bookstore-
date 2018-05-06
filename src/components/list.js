import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';

const List = ({ list }) => {
  return (
    <div className="list">
      {list.map(item => <ListItem key={item.id} name={item.volumeInfo.authors} title={item.volumeInfo.title} img={item.volumeInfo.imageLinks.thumbnail} />)}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array,
}

export default List;