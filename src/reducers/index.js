import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SAVE_NOTE, SHOW_LAYER } from '../constants'

const initialState = {
  notes: [
    {
      id: 1,
      title: 'Javascript简要概述',
      content: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。',
      isActive: true
  },
    {
      id: 2,
      title: 'React简述',
      content: 'React 是一个用于构建用户界面的 JAVASCRIPT 库。React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。eact 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。',
      isActive: false
    }
  ],
  cnote: {},
  isShowLayer: false
}

const note = (state={}, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        id: action.id,
        title: action.title,
        content: action.content
      })
    case SAVE_NOTE:
      if (action.title === state.title || action.content === state.content) return state
      return Object.assign({}, state, {
        id: action.id,
        title: action.title,
        content: action.content
        
      })
    default:
      return state
  }
}

const notes = (state=[], action) => {
  switch(action.type) {
    case ADD_NOTE:
      return [...state, note({}, action)]
    case SAVE_NOTE:
      return [...state, note({}, action)]
    default:
      return state
  }
}

const noteApp = (state=initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        notes: notes(state.notes, action)
      })
    case SHOW_NOTE:
      // 选中时增加active样式
      const _notes = state.notes.map((item) => {
        if (item.id === action.id) {
          item.isActive = true
        } else {
          item.isActive = false
        }
        return item
      })

      return Object.assign({}, state, {
        notes: _notes,
        cnote: state.notes.filter(item => item.id === action.id)[0]
      })
    case DELETE_NOTE:
      return state.map(item => item.id !== action.id)
    case SAVE_NOTE:
      return Object.assign({}, state, {
        notes: notes(state.notes, action)
      })
    case SHOW_LAYER:
      return Object.assign({}, state, {
        isShowLayer: action.isShowLayer
      })
    default:
      return state
  }
}

export default noteApp

