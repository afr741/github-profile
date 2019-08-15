export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  return (dispatch) => {

    let header = new Headers({"Content-Type":"application/json", "Authorization":"token a66eedb15b40a21df69e9e4cfa0b18cb4654d917"});
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
export function saveProfile() {
  var error = false;
  var propertiesToCheck = ['name','bio','location','company'];
  propertiesToCheck.forEach(function(term) {
    if(this.state.userInfo[term]==='') {
      error = true;
    }
  }.bind(this));
  if(!error) {
    this.props.saveProfile(this.state.userInfo);
  }
  this.setState({error});
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}
