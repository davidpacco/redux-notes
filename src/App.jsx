import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NewNote } from './components/NewNote'
import { Notes } from './components/Notes'
import { VisibilityFilter } from './components/VisibilityFilter'
import { initializeNotes, setNotes } from './reducers/noteReducer'

export function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}