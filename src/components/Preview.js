import React, {Component} from 'react'
const marked = require('marked')
// marked.setOptions({
//   highlight: function (code) {
//     return require('highlight.js').highlightAuto(code).value;
//   }
// })

export default class Preview extends Component {
  render() {
    let showDetailCls = this.props.showNoteDetail ? 'toLeft' : 'toRight'
    return (
      <div className={"right-box " + showDetailCls}>
        <div className="preview-top">
          <i onClick={() => this.props.changeStatusShow(!this.props.showNoteDetail)} className="iconfont">&#xe65f;</i>
          <a className="modify-btn iconfont">&#xe738;</a>
          <a className="delete-btn iconfont" onClick={ ()=> this.props.deleteClick(this.props.currentNote.id) }>&#xe74b;</a>
        </div>
        <div onClick={this.props.onClick} className="preview-wrap markdown-body" dangerouslySetInnerHTML={{__html: marked(`${this.props.currentNote.title ? '# '+this.props.currentNote.title : ''}\n\n${this.props.currentNote.content ? this.props.currentNote.content : ''}`)}}></div>
      </div>
    )
  }
} 