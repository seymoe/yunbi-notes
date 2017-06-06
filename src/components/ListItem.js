import React from 'react'

const ListItem = ({ id, title, content, time, clickPreview, changeStatusShow, showNoteDetail, cls}) => {
  return (
    <li className={cls} data-id={id} onClick={() => {
      clickPreview(id)
      changeStatusShow(!showNoteDetail)
    }}>
      <div className="listbox">
        <h3 className="listtitle">{title}</h3>
        <p>{content}</p>
        <span><i className="iconfont">&#xe64d;</i>{time}</span>
      </div>
    </li>
  )
}

export default ListItem