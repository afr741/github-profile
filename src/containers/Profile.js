import { connect } from 'react-redux';
import { fetchProfile } from '../actions/actions_profile';
import {saveProfile} from '../actions/actions_profile';


import ProfileComponent from '../Components/Profile';

const mapStateToProps = state => {
  return {
    profile : state.profile
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile : () => {
      dispatch(fetchProfile());
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
