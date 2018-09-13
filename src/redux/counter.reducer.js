import {
  types
} from './counter.actions'

const initialState = {
  value: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET.SUCCESS:
      return {
        value: action.value
      }
    case types.INCREMENT:
      return {
        value: state.value + 1
      }

    default:
      return state;
  }
}

export default counterReducer;
