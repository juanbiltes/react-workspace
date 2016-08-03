import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/homeStateActions';
import MenuButton from './MenuButton';
import {Navbar, NavItem, Nav, Col} from 'react-bootstrap';


class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let atHomePage = this.props.routes[1].component.name === "HomePage";

    return (
      <Navbar inverse={atHomePage} fluid>
          <Navbar.Header>
            <Navbar.Toggle />
            {!atHomePage &&
              <Navbar.Brand>
                <p>Juan</p>
              </Navbar.Brand>
            }
          </Navbar.Header>


          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <MenuButton />
              </NavItem>
              <NavItem>
                <p>Hol2</p>
              </NavItem>
            </Nav>
          </Navbar.Collapse>


      </Navbar>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  homeState: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    homeState: state.homeState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
