import { NewNote } from './components/NewNote'
import { Notes } from './components/Notes'
import { VisibilityFilter } from './components/VisibilityFilter'

export function App() {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}