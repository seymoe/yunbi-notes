import React from 'react'

const ListItem = ({ id, title, clickPreview, changeStatusShow, showNoteDetail, cls}) => {
  return (
    <li className={cls} data-id={id} onClick={() => {
      clickPreview(id)
      changeStatusShow(!showNoteDetail)
    }}>
      <div className="listbox">
        <h3 className="listtitle">{title}</h3>
        <p>所谓“键盘可访问性”，指的是用户只使用键盘访问网站的能力。例如，我们的iMac鼠标没电了，或者鼠标坏了，或者在智能电视中访问我们的网站，此时就只能依赖于键盘访问了。</p>
        <span><i className="iconfont">&#xe64d;</i>2017.6.6</span>
      </div>
    </li>
  )
}

export default ListItem