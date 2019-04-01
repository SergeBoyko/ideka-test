import React, { Component } from "react";
import PropTypes from 'prop-types';
import Tweet from "../componets/Tweet";


class ListTweets extends Component {
  render() {
    const { tweets, clicked, selectedPerson } = this.props;

    return (
      <main className="container">
        <div className="row">
          <button className="btn btn-primary" onClick={() => clicked()}>
            Choose another subject
          </button>
          <div className="col-12">
            <h1>This Tweets about {selectedPerson}</h1>
            {tweets.map(tweet => (
              <Tweet
                key={tweet._id}
                author={tweet.author}
                date={tweet.date}
                content={tweet.content}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

ListTweets.propTypes = {
  tweets: PropTypes.array.isRequired,
  selectedPerson: PropTypes.oneOf(['Hillary Clinton', 'Donald Trump']),
  clicked: PropTypes.func
}

export default ListTweets;
