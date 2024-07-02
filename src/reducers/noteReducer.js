import { createSlice, current } from "@reduxjs/toolkit"
import noteService from "../services/notes"

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    // createNote(state, action) {
    //   state.push(action.payload)
    // },
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const updatedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      console.log(current(state))
      return state.map(note => note.id === id ? updatedNote : note)
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = content => {
  return async dispatch => {
    const savedNote = await noteService.createNew(content)
    dispatch(appendNote(savedNote))
  }
}

export default noteSlice.reducer