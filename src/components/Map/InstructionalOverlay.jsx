import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Row, Col } from 'react-bootstrap';
import './InstructionalOverlay.scss';

const InstructionalOverlay = () => (
	<Row style={{ backgroundColor: '#056638', color: 'white' }}>
		<Col md={2}>
			<ArrowRightAltIcon style={{ fontSize: 80 }} />
		</Col>
		<Col md={8}>
			<h1 className='align-middle'>Turn right on Clark St.</h1>
		</Col>
	</Row>
);

export default InstructionalOverlay;
