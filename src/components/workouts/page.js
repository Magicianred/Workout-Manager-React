import React, { Component } from 'react';
import "./body/body.css";
import Navigation from "../home/nav/nav.js";
import Body from "./body/body.js";
import { Card } from "react-bootstrap";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Button } from '@material-ui/core';
import Loading from '../loading/loading';

export default class WorkoutsPage extends Component {
  redirect(page) { 
    this.props.history.push(`${page}`)
  }

  render() {
    if (this.props.theme !== null) {
      return (
        <div className="App">
          <Navigation theme={this.props.theme} variant={this.props.variant} />
          <h1 id="header" style={{ color: `var(--${this.props.theme})`, marginLeft: "3vh", marginTop: "1.3vh" }}>Your Workouts</h1>

          <div className="card-container">
            <Body theme={this.props.theme} variant={this.props.variant} />
              <Card className="workoutCard" id="add-card">
              <Card.Body className="add-card">
                <Button onClick={this.redirect.bind(this, "/workouts/add/")} className="add-card-btn">
                  <AddBoxOutlinedIcon style={{ color: `var(--${this.props.theme})` }} />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    } else { 
      return <Loading />
    }
  }
}
