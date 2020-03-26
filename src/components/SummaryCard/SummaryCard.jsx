import React, {
  useState
} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SummaryCard.css';

export default class SummaryCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tripName: '',
        host: '',
        destination: '',
        show: false
      };
    }

    componentDidMount() {
      // TO DO: add redux to dynamically import user id
      console.log("componentDidMount");
      fetch('/invitations/3')
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.setState({
            tripName: data[0].trip_title
          });
          this.setState({
            host: data[0].username
          });
          this.setState({ destination: data[0].destination });
        });
    }

    toggleShow = bool => {
	    this.setState({ show: bool });
     };

    render() {
      const {show, tripName, host, destination} = this.state;

      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>{tripName}</Card.Title>
              <Card.Text>
                <p>{host}</p>
                <p>{destination}</p>
              </Card.Text>
          </Card.Body>
        </Card>
      );
    };
  }
