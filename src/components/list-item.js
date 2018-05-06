import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const ListItem = ({ id, name, title, img }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Card
        hoverable
        cover={<img src={img} alt="img" />}
      >
        <Meta
          title={title}
          description={name}
        />
      </Card>
    </Link>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.array,
  img: PropTypes.string,
}

export default ListItem;