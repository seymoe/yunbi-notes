import moment from 'moment'
import { getStorage } from '../utils/storage'
import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SHOW_LAYER, SHOW_EDITER } from '../constants'

let noteId
let notesArr2
let notesArr = JSON.parse(getStorage('notes'))

if (notesArr instanceof Array && notesArr.length !== 0) {
  if (notesArr.length === 1) {
    notesArr2 = notesArr
  } else {
    notesArr2 = notesArr.sort(function (a,b){
      return a.id < b.id
    })
  }
  noteId = notesArr2[0]['id']+1
} else {
  noteId = 0
}

// 增加一篇笔记 或者 编辑之后保存
export const addNote = (title, content, id, time) => {
  if (id === undefined && time === undefined) {
    return {
      type: ADD_NOTE,
      id: noteId++,
      title,
      content,
      time: moment().format("YYYY-MM-DD HH:mm")
    }
  } else {
    return {
      type: ADD_NOTE,
      id,
      title,
      content,
      time: moment().format("YYYY-MM-DD HH:mm")
    }
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

// 显示浮出层
export const showLayer = (isShowLayer) => {
  return {
    type: SHOW_LAYER,
    isShowLayer
  }
}

// 显示编辑浮出层
export const showEditer = (isShowEditer) => {
  return {
    type: SHOW_EDITER,
    isShowEditer
  }
}