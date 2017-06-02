import React, { Component } from 'react';

import Head from './Head'
import ContainerList from '../containers/ContainerList'
import ContainerPreview from '../containers/ContainerPreview'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head></Head>
        <main>
          <div className="left-box">
            <h1>所有笔记</h1>
            <ContainerList></ContainerList>
          </div>
          <div className="right-box">
            <ContainerPreview></ContainerPreview>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
