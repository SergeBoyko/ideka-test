import React, { Component } from "react";

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

export default Tweet;
