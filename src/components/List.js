import React from 'react'
import ListItem from './ListItem'

const List = ({ listData, isShowLayer, onClick, addBtnClick }) => {
  return (
    <div className="left-box">
      <h1><i className="iconfont">&#xe88f;</i>所有笔记</h1>
      <span title="新增" className="add-new" onClick={ () => addBtnClick(!isShowLayer) }><i className="iconfont">&#xe889;</i></span>
      <ul className="list-wrap">
        {listData.map((item) => {
          const cls = (item.isActive) ? 'active' : ''
          return (
            <ListItem key={item.id} id={item.id} title={item.title} cls={cls} onClick={onClick} />
          )
        })
        }
      </ul>
    </div>
  )
}

export default List