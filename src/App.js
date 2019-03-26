import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPerson } from "./redux/store/actions";

import ListTweets from "./container/ListTweets";
import { getTweets } from "./assets/fakeTweets";
import { getDateFormatUnixTime } from "./services/getDateFormatUnixTime"
import { sortByDate } from "./services/sortByDate"
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { setDateToPattern } from "./services/setDateToPattern";

class App extends Component {
  state = {
    tweets: getTweets(),
    selectedPerson: 'Hillary Clinton'
  };

  componentDidMount() {
    const { tweets } = this.state;

    getDateFormatUnixTime(tweets);

    sortByDate(tweets);

    setDateToPattern(tweets);

    const tweetAbout = tweets.filter(
      t => t.tweetAbout === 'Hillary Clinton'
    );
    this.setState({ tweets: tweetAbout });
  }

  handleTogleCandidant = () => {
    const tweets = getTweets()

    let person = this.props.selectedPerson;
    if (person === "Hillary Clinton") {
      this.props.selectPerson("Donald Trump");
    }
    if (person === "Donald Trump") {
      this.props.selectPerson("Hillary Clinton");
    }
    const tweetAbout = tweets.filter(
      t => t.tweetAbout === person
    );
    this.setState({ tweets: tweetAbout, selectedPerson: person });
  };

  render() {
    const { tweets, selectedPerson } = this.state;

    return (
      <div className="App">
        <ListTweets tweets={tweets} clicked={this.handleTogleCandidant} selectedPerson={selectedPerson} />
      </div>
    );
  }
}

/////////// Redux here ///////////
const mapStateToProps = state => {
  const { tweetAbout } = state;
  return {
    selectedPerson: tweetAbout
  };
};

export default connect(
  mapStateToProps,
  { selectPerson }
)(App);
