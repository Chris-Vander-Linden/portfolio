import React, { Component } from "react";
import Switch from "@brookr/react-switch";
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";



class Navigation extends Component {

  render() {

    console.log(this.props.name);

    return <nav>
      <Nav activeKey="/home" fill >
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link href="/">
              {this.props.name}
          </Nav.Link>
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
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={ 90 }
            height={ 40 }
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={ {
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "20px",
                  color: "#353239",
                } }
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={ {
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                } }
              ></span>
            }
            id="icon-switch"
          />
        </Nav.Item>
      </Nav>
    </nav>
  }
}

export default Navigation;