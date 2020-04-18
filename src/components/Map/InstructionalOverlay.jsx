import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Row, Col } from 'react-bootstrap';

const InstructionalOverlay = () => (
	<Row style={{ backgroundColor: '#3d6cb9', color: 'white' }}>
		<Col md='xs'>
			<ArrowRightAltIcon style={{ fontSize: 100 }} />
		</Col>
		<Col>
			<h1 className='align-middle'>Turn right on Clark St.</h1>
		</Col>
	</Row>
);

export default InstructionalOverlay;
