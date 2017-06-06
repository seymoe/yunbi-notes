import React from 'react'
import ListItem from './ListItem'

const List = ({ listData, isShowLayer, showNoteDetail, changeStatusShow, onClick, addBtnClick }) => {
  let showDetailCls = showNoteDetail ? 'toLeft' : 'toRight'
  return (
    <div className={"left-box " + showDetailCls}>
      <h1>所有笔记</h1>
      <span title="新增" className="add-new" onClick={ () => addBtnClick(!isShowLayer) }><i className="iconfont">&#xe889;</i></span>
      <ul className="list-wrap">
        {listData.map((item) => {
          const cls = (item.isActive) ? 'active' : ''
          return (
            <ListItem key={item.id} id={item.id} title={item.title} content={item.content.substring(0,40)} time={item.time} cls={cls} showNoteDetail={showNoteDetail} changeStatusShow={changeStatusShow} clickPreview={onClick} />
          )
        })
        }
      </ul>
    </div>
  )
}

export default List