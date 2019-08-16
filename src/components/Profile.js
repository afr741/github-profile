import React, { Component } from 'react';
import { Form, Button }  from 'react-bootstrap';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : this.props.profile,
      editing : false,
      error : false

    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({userInfo: nextProps.profile, editing: false, error :false})

  }

  updateValue(type, event) {

    var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userInfoCopy[type] = event.target.value;
    this.setState({userInfo:userInfoCopy});
  }

  saveProfile(){
    var error  = false;
    var propertiesToCheck =['name', 'bio','location', 'company.'];
    propertiesToCheck.forEach(function(term) {
      if(this.state.userInfo[term]==='') {
        error = true;
        console.log('fuck you, it did not WORK!');
      }
    }.bind(this));
    if(!error){
      this.props.saveProfile(this.state.userInfo);
      console.log('Fuck you, it worked!');
    }
    this.setState({error});
  }


  render() {

    return (
      <div className="container">
      <Button bsstyle = "primary" onClick={()=> this.setState({editing: !this.state.editing})}>
      {this.state.editing ? "Cancel Edit" : "Edit"}
      </Button>
      <hr/>
      {this.state.editing      ?


      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name </Form.Label>
        <Form.Control
         type="text"
         className={this.state.error&&this.state.userInfo.name ==='' ? 'red-border' : ''}
         placeholder="Enter text here"
         value = {this.state.userInfo.name}
         onChange ={this.updateValue.bind(this, 'name')}
         />

        <Form.Label>Bio </Form.Label>
        <Form.Control
         type="text"
         className={this.state.error&&this.state.userInfo.bio ==='' ? 'red-border' : ''}

         placeholder="Enter text here"
         value = {this.state.userInfo.bio}
         onChange ={this.updateValue.bind(this, 'bio')}
         />

        <Form.Label>Location </Form.Label>
        <Form.Control
         type="text"
         className={this.state.error&&this.state.userInfo.location ==='' ? 'red-border' : ''}

         placeholder="Enter text here"
         value = {this.state.userInfo.location}
         onChange ={this.updateValue.bind(this, 'location')}
         />

        <Form.Label>Company </Form.Label>
        <Form.Control
         type="text"
         className={this.state.error&&this.state.userInfo.company ==='' ? 'red-border' : ''}

         placeholder="Enter text here"
         value = {this.state.userInfo.company}
         onChange ={this.updateValue.bind(this, 'company')}
         />
         <Button bsstyle ="info" onClick ={this.saveProfile.bind(this)}>Save</Button>
      </Form.Group>


        :

          <div>
            <p><strong>Name:</strong> {this.state.userInfo.name}</p>
            <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
            <p><strong>Location:</strong> {this.state.userInfo.location}</p>
            <p><strong>Company:</strong> {this.state.userInfo.company}</p>

          </div>
      }



      </div>
    );
  }
}

export default Profile;
