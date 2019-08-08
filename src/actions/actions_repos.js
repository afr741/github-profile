export const REPOS_FETCHED = 'REPOS_FETCHED';

export function fetchRepos() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 509cd3412dcdfd268730af7be3b328cde3c4b406"});
    return fetch('https://api.github.com/user/repos', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadRepos(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadRepos(results) {
  return {
    type : REPOS_FETCHED,
    payload : results
  }
}
