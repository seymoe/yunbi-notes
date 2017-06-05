import React from 'react'
const marked = require('marked')

class Edit extends React.Component {
  constructor(props) {
    super(props)
    const _t = this.props.title
    const _c = this.props.content
    this.state = {
      title: _t,
      content: _c
    }
    this.saveANote = this.saveANote.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeContent = this.changeContent.bind(this)
  }

  saveANote (tit, ctt, id) {
    if (!tit.trim() || !ctt.trim()) return
    this.props.addNewClick(tit, ctt, id)
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  changeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    let markedString = `# ${this.state.title}\n\n${this.state.content}`
    return (
    <div className="layer-wrap">
      <div className="layer-container">
        <div className="layer-left">
          <h3>编辑</h3>
          <i title="保存" className="iconfont icon-save" onClick={() => this.saveANote(this.state.title, this.state.content, this.props.id)}>&#xe8c5;</i>
          <i title="关闭" className="iconfont icon-close" onClick={this.props.closeLayerWrap}>&#xe86d;</i>
          <div className="input-box">
            <input type="text" placeholder="请输入标题" onChange={this.changeTitle} value={this.state.title}/>
          </div>
          <div className="textarea-box">
            <textarea onChange={this.changeContent} value={this.state.content}></textarea>
          </div>
        </div>
        <div className="layer-right">
          <h3>预览</h3>
          <div className="layer-preview markdown-body" dangerouslySetInnerHTML={{__html: marked(markedString)}}></div>
        </div>
      </div>
    </div>
  )
  }
}

export default Edit