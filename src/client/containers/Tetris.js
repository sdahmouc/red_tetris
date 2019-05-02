import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './Home';
import Login from './Login';
import Aside from './Aside';

import { main, wrapper } from '../style/tetris.module.css';

const mapStateToProps = ({ gameReducer }) => {
	const { players, currentPlayer } = gameReducer;
	const otherPlayers = players.filter(player => player.name !== currentPlayer);
	const [ player2, player3, player4 ] = otherPlayers;
	
	return {
		player2,
		player3,
		player4,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

const flexStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
};

const Tetris = ({ player2, player3, player4 }) => {
	
	return (
		<div style={ flexStyle }>
			<div className={ wrapper }>
				<Aside top={ player2 } bottom={ player3 }/>
				<div className={ main }>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route path="/login" component={ Login } />
					</Switch>
				</div>
				<Aside top={ player4 } bottom={ player4 }/>
			</div>
		</div>
	);
};

Tetris.propTypes = {
	player2: PropTypes.object,
	player3: PropTypes.object,
	player4: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tetris));
