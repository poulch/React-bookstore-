import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

const ListItem = ({ name, title, img }) => {
  return (
    <Card
      hoverable
      cover={<img src={img} alt="img"/>}
    >
    <Meta
      title={title}
      description={name}
    />
    </Card>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.array,
  img: PropTypes.string,
}

export default ListItem;