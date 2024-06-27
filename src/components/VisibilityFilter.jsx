import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

export function VisibilityFilter() {
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(filterChange('ALL'))}
        />All
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(filterChange('IMPORTANT'))}
        />Important
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => dispatch(filterChange('NONIMPORTANT'))}
        />Nonimportant
      </div>
    </div>
  )
}
