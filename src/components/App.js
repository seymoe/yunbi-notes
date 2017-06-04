import React from 'react'
import { connect } from 'react-redux'

import Head from './Head'
import ContainerList from '../containers/ContainerList'
import ContainerPreview from '../containers/ContainerPreview'
import ContainerLayer from '../containers/ContainerLayer'
import '../../node_modules/github-markdown-css/github-markdown.css'
import './App.css';


class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNoteDetail: false
    }
    this.changeStatusShow = this.changeStatusShow.bind(this)
  }

  changeStatusShow(status) {
    this.setState({
      showNoteDetail: status
    })
  }

  render() {
    const layer = this.props.isShowLayer ? <ContainerLayer /> : ''
    return (
      <div className='App'>
        <Head></Head>
        <main>
          <ContainerList showNoteDetail={this.state.showNoteDetail} changeStatusShow={this.changeStatusShow}></ContainerList>
          <ContainerPreview showNoteDetail={this.state.showNoteDetail} changeStatusShow={this.changeStatusShow}></ContainerPreview>
        </main>
        {layer}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer
})

const App = connect(
  mapStateToProps
)(Root)

export default App
