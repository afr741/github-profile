export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

//personal access token that needs to be GENERATED FOR EACH USER.
  const personalAccessToken = "token 37fbddda5e5c16e5183c757423b801f6cae2e55b";
export function fetchProfile() {
  return (dispatch) => {

    let header = new Headers({"Content-Type":"application/json", "Authorization": {personalAccessToken}});
    return fetch('https://api.github.com/users/afr741', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }

}
export function saveProfile(profile) {
  return (dispatch) => {

    let header = new Headers({"Content-Type":"application/json", "Authorization": {personalAccessToken} });
    return fetch('https://api.github.com/user', {
      method: 'PATCH',
      headers: header,
      body: JSON.stringify(profile)
    })
    .then(response => response.json())
    .then(json => {

      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }

}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}
