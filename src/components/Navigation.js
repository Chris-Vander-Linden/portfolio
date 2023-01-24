import React, { Component } from "react";
import Switch from "@brookr/react-switch";
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import { FaGlobe, FaRegMoon, FaRegSun } from 'react-icons/fa';


class Navigation extends Component {

  render() {
    return <nav>
      <Nav activeKey="/home" fill >

        <div id="header-title-container">
          <Nav.Item>
            <LinkContainer to="/">

              <Nav.Link href="/">

                <div><FaGlobe /></div>
                <div id="name-title">
                <div>{ this.props.name }</div>
                <div>{ `<${this.props.title}/>`}</div>
                </div>

              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </div>

        <div id="nav-links">
          <Nav.Item>
            <LinkContainer to="/more">
              <Nav.Link eventKey="about">More</Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item>
            <LinkContainer to="/about">
              <Nav.Link eventKey="about">About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Switch
              checked={ this.props.checked }
              onChange={ this.props.onThemeSwitchChange }

              offColor="#c7c7c7"
              onColor="#353535"
              className="react-switch mx-auto"

              uncheckedIcon={
                <FaRegMoon />
              }
              checkedIcon={
                <FaRegSun />
              }
              id="icon-switch"
            />
          </Nav.Item>
        </div>
      </Nav>
    </nav>
  }
}

export default Navigation;