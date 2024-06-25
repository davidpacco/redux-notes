import ReactDOM from 'react-dom/client'

import noteReducer from './reducers/noteReducer'
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
  return (
    <div>
      <ul>
        {store.getState().map(note => (
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'Important' : ''}</strong>
            <button onClick={() => store.dispatch({ type: 'TOGGLE_IMPORTANCE', payload: { id: note.id } })}>Change</button>
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