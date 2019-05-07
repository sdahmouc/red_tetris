import { resetGrid } from '../actions/Grid';
import { PHASES } from '../constants';
import { emitPhaseSwitch } from '../actions/Socket';
import { switchPhase } from '../actions/Game';

export default function endGame() {
	return ({ dispatch, getState }) => next => action => {
		const { gridReducer, gameReducer } = getState();
		const { interval, overflows } = gridReducer;
		const { currentPlayer, room } = gameReducer;
		const { type } = action;

		if (overflows && type !== 'reset-grid') {
			clearInterval(interval);
			dispatch(resetGrid());
			dispatch(emitPhaseSwitch(currentPlayer, room, PHASES.ENDED));

			return dispatch(switchPhase(PHASES.ENDED));
		}

		return next(action);
	};
}