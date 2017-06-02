import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SAVE_NOTE} from '../constants'

let noteId = 0

// 增加一篇笔记
export const addNote = (id, title, content) => {
  return {
    type: ADD_NOTE,
    id: noteId++,
    title,
    content
  }
}

// 删除一篇笔记
export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    id
  }
}

// 预览一篇笔记
export const showNote = (id) => {
  return {
    type: SHOW_NOTE,
    id
  }
}

// 保存正在编辑的笔记
export const saveNote = (id, title, content) => {
  return {
    type: SAVE_NOTE,
    id,
    title,
    content
  }
}