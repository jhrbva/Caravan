// this file inports all the arrows needed for the turn-by-turn
// instructions and passes them to the instructional overlay

import React from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CallMadeIcon from '@material-ui/icons/CallMade';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import TrainIcon from '@material-ui/icons/Train';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import CallSplitIcon from '@material-ui/icons/CallSplit';

const InstructionalArrows = (maneuver) => {
	switch (maneuver.maneuver) {
		case 'straight':
			return <ArrowUpwardIcon style={{ fontSize: 80 }} />;
		case 'merge':
			return <MergeTypeIcon style={{ fontSize: 80 }} />;
		case 'ferry':
			return <DirectionsBoatIcon style={{ fontSize: 80 }} />;
		case 'ferry-train':
			return <TrainIcon style={{ fontSize: 80 }} />;
		case 'turn-sharp-left':
			return <ArrowBackIcon style={{ fontSize: 80 }} />;
		case 'turn-slight-left':
			return <ArrowBackIcon style={{ fontSize: 80 }} />;
		case 'ramp-left':
			return <ArrowBackIcon style={{ fontSize: 80 }} />;
		case 'turn-left':
			return <ArrowBackIcon style={{ fontSize: 80 }} />;
		case 'uturn-left':
			return <UndoIcon style={{ fontSize: 80 }} />;
		case 'roundabout-left':
			return <RotateLeftIcon style={{ fontSize: 80 }} />;
		case 'fork-left':
			return <CallSplitIcon style={{ fontSize: 80 }} />;
		case 'turn-sharp-right':
			return <ArrowForwardIcon style={{ fontSize: 80 }} />;
		case 'turn-slight-right':
			return <CallMadeIcon style={{ fontSize: 80 }} />;
		case 'ramp-right':
			return <CallMadeIcon style={{ fontSize: 80 }} />;
		case 'turn-right':
			return <ArrowForwardIcon style={{ fontSize: 80 }} />;
		case 'uturn-right':
			return <RedoIcon style={{ fontSize: 80 }} />;
		case 'roundabout-right':
			return <RotateRightIcon style={{ fontSize: 80 }} />;
		case 'fork-right':
			return <CallSplitIcon style={{ fontSize: 80 }} />;
		default:
			return <NavigationIcon style={{ fontSize: 80 }} />;
	}
};

export default InstructionalArrows;
