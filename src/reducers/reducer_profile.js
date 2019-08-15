import {
  PROFILE_FETCHED
} from '../actions/actions_profile'

const profile = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_FETCHED:
      return action.payload
    default:
      return state
  }
}

export default profile
