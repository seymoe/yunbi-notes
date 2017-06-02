import React, {Component} from 'react'

export default class Preview extends Component {
  render() {
    return (
      <div className="preview-wrap">
        <h1>{this.props.currentNote.title}</h1>
        <p>{this.props.currentNote.content}</p>
      </div>
    )
  }
} 