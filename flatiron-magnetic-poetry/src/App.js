import React, { Component } from 'react';
import './App.css';
import WordsContainer from './components/WordsContainer'
import { fetchWords } from "./redux/actions"
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        <WordsContainer />
      </div>
    );
  }
}

export default App
