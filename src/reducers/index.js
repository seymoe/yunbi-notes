import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SAVE_NOTE, SHOW_LAYER, SHOW_EDITER } from '../constants'

const initialState = {
  notes: [],
  cnote: {},
  isShowLayer: false,
  idShowEditer: false
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
        content: action.content,
        isActive: false
      })
    default:
      return state
  }
}

const notes = (state=[], action) => {
  switch(action.type) {
    case ADD_NOTE:
      let isNew = true
      const _arr = state.map((item) => {
        if (item.id === action.id) {
          isNew = false
          item.title = action.title
          item.content = action.content
        }
        return item
      })
      console.log('编辑之后的所有列表：'+_arr)

      if (isNew) {
        return [...state, note({}, action)]        
      } else {
        return _arr
      }
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
      // 删除列表
    case DELETE_NOTE:
      let newnotes = state.notes.filter(item => item.id !== action.id)
      return Object.assign({}, state, {
        notes: newnotes,
        cnote: {}
      })
    case SAVE_NOTE:
      return Object.assign({}, state, {
        notes: notes(state.notes, action)
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

