import React, { Component } from 'react';
import { FormGroup, FormLabel, FormControl, Form, Button }  from 'react-bootstrap';
import actions_repos from '../actions/actions_repos';
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : {},
      editing : false,
      error : false

    }
  }

  componentDidMount() {
    //this.props.fetchRepos();
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 8e47fca3776965122381ee6058c83d398aad8e14"});
    return fetch('https://api.github.com/users  /afr741', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      //dispatch(loadRepos(json))
      console.log(json)
    })
    .catch(error => console.log(error))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({userInfo: nextProps.profile, editing: false, error :false})
  }

  updateValue(type, event) {
    var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userInfoCopy[type] = event.target.value;
    this.setState({userInfo:userInfoCopy});
  }

  saveProfile() {
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

  render() {

    return (
      <div className="container">
      <Button bsStyle = "primary" onClick={()=> this.setState({editing: !this.state.editing})}>Edit</Button>

      {this.state.editing ?

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Anushervon Rakhmatov" value = {this.state.userInfo.name} onChange ={this.updateValue.bind(this)}/>
      </Form.Group>


        :

          <div>
            <p><strong>Name</strong> {this.state.userInfo.name}</p>
          </div>
      }


      </div>
    );
  }
}

export default Profile;
