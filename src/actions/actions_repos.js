export const REPOS_FETCHED = 'REPOS_FETCHED';

export function fetchRepos() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 8e47fca3776965122381ee6058c83d398aad8e14"});
    return fetch('https://api.github.com/user/afr741', {
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
