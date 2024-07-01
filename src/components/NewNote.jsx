import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"
import noteService from "../services/notes"

export function NewNote() {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    const savedNote = await noteService.createNew(content)
    dispatch(createNote(savedNote))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" type="text" />
      <button type="submit">Add</button>
    </form>
  )
}