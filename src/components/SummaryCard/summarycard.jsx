import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import './summarycard.css';

const TripCard = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => {toggleShow(true); }} style={{backgroundColor: "red", color: "white"}}><b>Cancel?</b></Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Trip Name</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>

  );
};


const App = () => (
  <Container>
    <h1 className="header">Trips</h1>
    <ul class="flex-container wrap">
      <Row>
        <li class="flex-item">
          <TripCard className="toast">
            <p>Host</p>
            <p>Trip Location</p>
            <a href=""> More Info</a>
          </TripCard>
        </li>
        <li class="flex-item">
          <TripCard className="toast">
            <p>Host</p>
            <p>Trip Location</p>
            <a href=""> More Info</a>
          </TripCard>
        </li>
        <li class="flex-item">
          <TripCard className="toast">
            <p>Host</p>
            <p>Trip Location</p>
            <a href=""> More Info</a>
          </TripCard>
        </li>
        <li class="flex-item">
          <TripCard className="toast">
            <p>Host</p>
            <p>Trip Location</p>
            <a href=""> More Info</a>
          </TripCard>
        </li>
        <li class="flex-item">
          <TripCard className="toast">
            <p>Host</p>
            <p>Trip Location</p>
            <a href=""> More Info</a>
          </TripCard>
        </li>
        <li class="flex-item">
          <TripCard className="toast">
            <p>Host</p>
            <p>Trip Location</p>
            <a href=""> More Info</a>
          </TripCard>
        </li>
      </Row>
    </ul>
</Container>
);

export default App;
