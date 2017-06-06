import React, { Component } from 'react'
const marked = require('marked')

export default class Preview extends Component {
  render() {
    let showDetailCls = this.props.showNoteDetail ? 'toLeft' : 'toRight'
    return (
      <div className={"right-box " + showDetailCls}>
        <div className="preview-top">
          <i onClick={() => this.props.changeStatusShow(!this.props.showNoteDetail)} className="iconfont">&#xe65f;</i>
          <a title="编辑" className="modify-btn iconfont" onClick={() => {
            if (this.props.currentNote.id === undefined) return
            this.props.editClick(!this.props.isShowEditer)
          }}>&#xe738;</a>
          <a title="删除" className="delete-btn iconfont" onClick={() => {
            const _id = this.props.currentNote.id
            if (_id === undefined) return
            this.props.deleteClick(_id)
            this.props.changeStatusShow(!this.props.showNoteDetail)
          }}>&#xe74b;</a>
        </div>
        <div onClick={this.props.onClick} className="preview-wrap markdown-body" dangerouslySetInnerHTML={{ __html: marked(`${this.props.currentNote.title ? '# ' + this.props.currentNote.title : ''}\n\n${this.props.currentNote.content ? this.props.currentNote.content : ''}`) }}></div>
      </div>
    )
  }
} 