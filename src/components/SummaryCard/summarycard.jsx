import React, {
  useState
} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import './SummaryCard.css';

export default class SummaryCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tripName: '',
        host: '',
        show: false
      };
    }

    componentDidMount() {
      // TO DO: add redux to dynamically import user id
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
        });
    }

    toggleShow = bool => {
	    this.setState({ show: bool });
     };

    render() {
      const {show} = this.state;
      return ( <
        > {
          !show && < Button onClick = {
            () => {
              this.toggleShow(true);
            }
          }
          style = {
            {
              backgroundColor: "red",
              color: "white"
            }
          } > < b > Cancel ? < /b></Button >
        } <
        Toast show = {
          show
        }
        onClose = {
          () => this.toggleShow(false)
        } >
        <
        Toast.Header >
        <
        strong className = "mr-auto" > Trip Name < /strong> <
        /Toast.Header> <
        Toast.Body >
        <
        p > {this.state.host} < /p> <
        p > Trip Location < /p> <
        a href = "" > More Info < /a> <
        /Toast.Body> <
        /Toast> <
        />
      );
    };
  }
