import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"

export function NewNote() {
  const dispatch = useDispatch()

  const addNote = e => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" type="text" />
      <button type="submit">Add</button>
    </form>
  )
}