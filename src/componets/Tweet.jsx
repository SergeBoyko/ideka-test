import React, { Component } from "react";
import PropTypes from 'prop-types';


class Tweet extends Component {
  render() {
    const { author, date, content } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <span style={{ fontWeight: "bold" }}>{author}</span> {date}
        </div>
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Tweet;
