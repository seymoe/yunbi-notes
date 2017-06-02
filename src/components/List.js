import React from 'react'
import ListItem from './ListItem'

const List = ({ listData, onClick }) => {
  return (
    <ul className="list-wrap">
      {listData.map((item) => {
        const cls = (item.isActive) ? 'active' : ''
        return (
          <ListItem key={item.id} id={item.id} title={item.title} cls={cls} onClick={onClick}/>
        )
      })     
      }    
    </ul>
  )
}

export default List