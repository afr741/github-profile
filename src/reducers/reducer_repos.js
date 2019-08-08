import {
  REPOS_FETCHED
} from '../actions/actions_repos'

const repos = (state = [], action) => {
  switch (action.type) {
    case REPOS_FETCHED:
      return action.payload
    default:
      return state
  }
}

export default repos
