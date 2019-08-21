import React, {Component} from 'react';


import {Nav, Navbar} from 'react-bootstrap'
import Profile from '../containers/Profile';
import SliderComponent from '../containers/Slider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Slider'
    }
  }

  componentDidMount() {

        this.props.fetchProfile();
    }


      render() {


        return (

          <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" onClick={()=>this.setState({currentTab:'Slider'})}>My Github-Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">

              </Nav>
              <Nav>
                <Nav.Link eventKey= {1} href="#" onClick={()=>this.setState({currentTab:'Profile'})}>Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#" onClick={()=>this.setState({currentTab:'Slider'})}>Slider</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            {this.state.currentTab ==='Slider' ? <SliderComponent/> :false}
            {this.state.currentTab === 'Profile' ? <Profile/> : false}
          </div>
          </div>


);
}
}

export default App;
