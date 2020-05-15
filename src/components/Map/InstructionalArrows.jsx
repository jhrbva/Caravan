// this file inports all the arrows needed for the turn-by-turn
// instructions and passes them to the instructional overlay

import React from 'react';
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
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import './InstructionalOverlay.scss';

const InstructionalArrows = (maneuver) => {
	switch (maneuver.maneuver) {
		case 'straight':
			return <ArrowUpwardIcon className={'maneuver'} />;
		case 'merge':
			return <MergeTypeIcon className={'maneuver'} />;
		case 'ferry':
			return <DirectionsBoatIcon className={'maneuver'} />;
		case 'ferry-train':
			return <TrainIcon className={'maneuver'} />;
		case 'turn-sharp-left':
			return <ArrowBackIcon className={'maneuver'} />;
		case 'turn-slight-left':
			return <ArrowBackIcon className={`maneuver top-left`} />;
		case 'ramp-left':
			return <ArrowBackIcon className={`maneuver top-left`} />;
		case 'turn-left':
			return <ArrowBackIcon className={'maneuver'} />;
		case 'uturn-left':
			return <UndoIcon className={'maneuver'} />;
		case 'roundabout-left':
			return <RotateLeftIcon className={'maneuver'} />;
		case 'fork-left':
			return <CallSplitIcon className={'maneuver'} />;
		case 'turn-sharp-right':
			return <ArrowForwardIcon className={'maneuver'} />;
		case 'turn-slight-right':
			return <CallMadeIcon className={'maneuver'} />;
		case 'ramp-right':
			return <CallMadeIcon className={'maneuver'} />;
		case 'turn-right':
			return <ArrowForwardIcon className={'maneuver'} />;
		case 'uturn-right':
			return <RedoIcon className={'maneuver'} />;
		case 'roundabout-right':
			return <RotateRightIcon className={'maneuver'} />;
		case 'fork-right':
			return <CallSplitIcon className={'maneuver'} />;
		default:
			return <GpsFixedIcon className={'maneuver'} />;
	}
};

export default InstructionalArrows;
