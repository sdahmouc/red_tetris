import { popPieces, placePiece, placeGarbage } from '../actions/Grid';
import { emitPieceRequest, emitGridUpdate } from '../actions/Socket';

export default function hijackTranslate() {
	return ({ dispatch, getState }) => next => (action) => {
		const { type } = action;
		const { pieces, piecesQueue, grid, score } = getState().gridReducer;

		// console.log('GARBAGE', score.garbage, type);
		if (type === 'translate-piece' && pieces === null) {
			if (piecesQueue.length > 0) {
				// ADD PLACE-BLOCKED-PIECES HERE
				console.log('GARBAGE', score.garbage);
				if (score.garbage > 0) {
					dispatch(placeGarbage(score.garbage));
				}

				dispatch(popPieces());
				dispatch(placePiece());
			} else {
				dispatch(emitPieceRequest(grid));
			}

			return dispatch(emitGridUpdate(grid, score));
		}

		return next(action);
	};
}