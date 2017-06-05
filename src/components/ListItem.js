import React from 'react'

const ListItem = ({ id, title, clickPreview, changeStatusShow, showNoteDetail, cls}) => {
  return (
    <li className={cls} data-id={id} onClick={() => {
      clickPreview(id)
      changeStatusShow(!showNoteDetail)
    }}>
      <p className="listtitle">{title}</p>
      <i className="iconfont">&#xe65f;</i>
    </li>
  )
}

export default ListItem