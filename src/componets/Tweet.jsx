import React, { Component } from "react";

class Tweet extends Component {
  render() {
    const { author, date, content } = this.props;
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const newDate = new Date(date);
    let formamattedDate = new Intl.DateTimeFormat("us-US", options).format(
      newDate
    );
    return (
      <div className="card">
        <div className="card-header">
          <span style={{ fontWeight: "bold" }}>{author}</span> {formamattedDate}
        </div>
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
  }
}

export default Tweet;
