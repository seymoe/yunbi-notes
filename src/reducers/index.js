import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SHOW_LAYER, SHOW_EDITER } from '../constants'
import {setStorage, getStorage} from '../utils/storage'

// 获取初始数据
const localnotes = JSON.parse(getStorage('notes'))
const localcnote = getStorage('cnote')
const initialState = {
  notes: localnotes || [],
  cnote: localcnote || {},
  isShowLayer: false,
  idShowEditer: false
}

const note = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        id: action.id,
        title: action.title,
        content: action.content,
        time: action.time
      })
    default:
      return state
  }
}

const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      let isNew = true
      const _arr = state.map((item) => {
        if (item.id === action.id) {
          isNew = false
          item.title = action.title
          item.content = action.content
          item.time = action.time
        }
        return item
      })

      if (isNew) {
        return [...state, note({}, action)]
      } else {
        return _arr
      }
    default:
      return state
  }
}

const noteApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      let _notes = notes(state.notes, action)
      // 本地存储
      setStorage('notes',JSON.stringify(_notes))

      return Object.assign({}, state, {
        notes: _notes
      })
    case SHOW_NOTE:
      // 选中时增加active样式
      const notesArr = state.notes.map((item) => {
        if (item.id === action.id) {
          item.isActive = true
        } else {
          item.isActive = false
        }
        return item
      })
      let _cnote = state.notes.filter(item => item.id === action.id)[0]

      // 本地存储
      setStorage('notes',JSON.stringify(notesArr))
      setStorage('cnote',_cnote)

      return Object.assign({}, state, {
        notes: notesArr,
        cnote: _cnote
      })
    // 删除列表
    case DELETE_NOTE:
      let newnotes = state.notes.filter(item => item.id !== action.id)

      // 本地存储
      setStorage('notes',JSON.stringify(newnotes))
      setStorage('cnote',{})

      return Object.assign({}, state, {
        notes: newnotes,
        cnote: {}
      })
    case SHOW_LAYER:
      return Object.assign({}, state, {
        isShowLayer: action.isShowLayer
      })
    case SHOW_EDITER:
      return Object.assign({}, state, {
        isShowEditer: action.isShowEditer
      })
    default:
      return state
  }
}

export default noteApp

