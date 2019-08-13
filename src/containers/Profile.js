import { connect } from 'react-redux';
import { fetchProfile, saveProfile } from '../actions/actions_profile';
import {fetchProfile, saveProfile} from '../Components/Profile';
import { fetchRepos } from '../actions/actions_repos';

import ProfileComponent from '../Components/Profile';

const mapStateToProps = state => {
  return {
    profile : state.profile,
    repos : state.repos
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRepos : () => {
      dispatch(fetchRepos());
    },
    saveProfile : (profile) => {
      dispatch(saveProfile(profile));
    }
  }
}

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default Profile;
