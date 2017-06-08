import React from 'react'
const marked = require('marked')

class Layer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.saveANote = this.saveANote.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeContent = this.changeContent.bind(this)
  }

  saveANote (tit, ctt) {
    if (!tit.trim() || !ctt.trim()) return
    this.props.addNewClick(tit, ctt)
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
          <h3>新增</h3>
          <i title="保存" className="iconfont icon-save" onClick={() => this.saveANote(this.state.title, this.state.content)}>&#xe8c5;</i>
          <i title="关闭" className="iconfont icon-close" onClick={this.props.closeLayerWrap}>&#xe86d;</i>
          <div className="input-box">
            <input type="text" placeholder="这儿是标题" onChange={this.changeTitle} value={this.state.title}/>
          </div>
          <div className="textarea-box">
            <textarea onChange={this.changeContent} value={this.state.content} placeholder="试试markdown写法"></textarea>
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

export default Layer