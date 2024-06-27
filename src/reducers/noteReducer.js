const initialState = [
  {
    content: 'Reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'State of store can contain any data',
    important: false,
    id: 2,
  },
]

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]

    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id
      const noteToChange = state.find(note => note.id === id)
      const updatedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }

      return state.map(note => note.id === id ? updatedNote : note)
    }

    default:
      return state
  }
}

const generateId = () => Number((Math.random() * 1000000).toFixed())

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = id => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}

export default noteReducer