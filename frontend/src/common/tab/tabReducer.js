import { TAB_SELECTED, TAB_SHOWED } from '../../utils/actionNames'

const initial_state = { selected: '', visible: {} }

export default (state = initial_state, action) => {
  switch(action.type) {
    case TAB_SELECTED:
      return { ...state, selected: action.payload }

    case TAB_SHOWED:
      return { ...state, visible: action.payload }

    default:
      return state
  }
}