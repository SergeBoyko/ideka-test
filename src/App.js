import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPerson } from "./redux/store/actions";

import ListTweets from "./container/ListTweets";
import { getTweets } from "./assets/fakeTweets";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = { tweets: getTweets() };

  componentDidMount() {
    const { tweets } = this.state;
    const sortByDate = tweets.sort(
      (d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime()
    );
    const tweetAbout = sortByDate.filter(
      t => t.tweetAbout === this.props.selectedPerson
    );
    this.setState({ tweets: tweetAbout });
  }

  handleTogleCandidant = () => {
    let person = this.props.selectedPerson;
    if (person === "Hillary Clinton") {
      this.props.selectPerson("Donald Trump");
    }
    if (person === "Donald Trump") {
      this.props.selectPerson("Hillary Clinton");
    }
  };

  render() {
    const { tweets } = this.state;

    return (
      <div className="App">
        <ListTweets tweets={tweets} clicked={this.handleTogleCandidant} />
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
