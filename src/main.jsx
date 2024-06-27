import ReactDOM from 'react-dom/client'

import noteReducer, { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { createStore } from 'redux'

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    id: 1,
    content: 'the app state is in redux store',
    important: true
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    id: 2,
    content: 'state changes are made with actions',
    important: false
  }
})


function App() {
  const addNote = e => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    store.dispatch(createNote(content))
  }

  const toggleImportance = id => store.dispatch(toggleImportanceOf(id))

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {store.getState().map(note => (
          <li
            key={note.id}
            onClick={() => toggleImportance(note.id)}
          >
            {note.content} <strong>{note.important ? 'Important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => root.render(<App />)

renderApp()
store.subscribe(renderApp)