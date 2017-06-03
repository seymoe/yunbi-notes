import React, { Component } from 'react';
import { connect } from 'react-redux'

import Head from './Head'
import ContainerList from '../containers/ContainerList'
import ContainerPreview from '../containers/ContainerPreview'
import ContainerLayer from '../containers/ContainerLayer'
import '../../node_modules/github-markdown-css/github-markdown.css'
import './App.css';

const Root = ( {isShowLayer} ) => {
  const layer = isShowLayer ? <ContainerLayer /> : ''
  return (
    <div className='App'>
        <Head></Head>
        <main>
          <ContainerList></ContainerList>
          <div className="right-box">
            <ContainerPreview></ContainerPreview>
          </div>
        </main>
        {layer}
      </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer
})

const App = connect(
  mapStateToProps
)(Root)

export default App
