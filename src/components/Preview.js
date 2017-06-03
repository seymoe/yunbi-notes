import React, {Component} from 'react'
const marked = require('marked')
// marked.setOptions({
//   highlight: function (code) {
//     return require('highlight.js').highlightAuto(code).value;
//   }
// })

export default class Preview extends Component {
  render() {
    return (
      <div className="preview-wrap markdown-body" dangerouslySetInnerHTML={{__html: marked(`# ${this.props.currentNote.title}\n\n${this.props.currentNote.content}`)}}></div>
    )
  }
} 