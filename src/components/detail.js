import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const Detail = ({ history, match, list }) => {
  const id = match.params.id;
  const data = list[id].volumeInfo;

  return (
    <div className="detail">
      <button onClick={() => { history.push('/') }}>Back to list</button>
      <Row>
        <Col span={16}>
          <h1>Title {data.title}</h1>
          <h2>Author: {data.author}</h2>
          <p>Date: {data.publishedDate}</p>
          <p>Page count: {data.pageCount}</p>
          <p>Publisher: {data.publisher}</p>
          <p>Language: {data.language}</p>
        </Col>

        <Col span={8}>
          <a href={data.infoLink}>Download here</a>
        </Col>
      </Row>
    </div>
  )
}

Detail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  list: PropTypes.object,
}

export default Detail;