import { types } from './action'

export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        count: state.count + (action.count || 1),
      }
    case types.MINUS:
      return {
        ...state,
        count: state.count - (action.count || 1),
      }
    default:
      return state
  }
}