import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ListItem from './list-item';

const List = ({ list }) => {
  return (
    <div className="list">
      {_.map(list, item => {
        let src = ''
        if (item.volumeInfo.imageLinks) {
          src = item.volumeInfo.imageLinks.thumbnail
        }

        return <ListItem
          key={item.id}
          id={item.id}
          name={item.volumeInfo.authors}
          title={item.volumeInfo.title}
          img={src} />
      }
      )}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.object,
}

export default List;