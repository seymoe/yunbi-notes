import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SAVE_NOTE, SHOW_LAYER } from '../constants'

const initialState = {
  notes: [],
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
      // 删除列表
    case DELETE_NOTE:
      let newnotes = state.notes.filter(item => item.id !== action.id)
      return Object.assign({}, state, {
        notes: newnotes
      })
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

