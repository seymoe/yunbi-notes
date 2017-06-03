import React from 'react'

const ListItem = ({ id, title, onClick, cls}) => {
  return (
    <li className={cls} data-id={id} onClick={() => onClick(id)}>{title} <i className="iconfont">&#xe65f;</i></li>
  )
}

export default ListItem