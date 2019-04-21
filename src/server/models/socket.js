const Piece = require('./piece');

/**
 * TODO:
 * - Handle: 'game-over', 'new-player'
 */

module.exports = class Socket {
	constructor(namespace, io) {
		this.namespace = namespace ? `${namespace}/` : '';
		this.io = io;
	}

	connect() {
		this.io.on(`${this.namespace}connection`, (socket) => {
			console.log('connection established');
			socket.on('new-player-connected-event', ({ player, room }) => {
				console.log(`${player} is ready in room ${room}`);
				// socket.emit('new-player-connected-event', { player, room });
			});

			socket.on('game-start', () => {
				const { type } = new Piece();
				console.log('game has started');
				socket.emit('new-piece-event', { pieces: type });
			});

			socket.on('game-ended', () => {
				console.log('game has ended');
			});

			socket.on('piece-request', ({ player, room }) => {
				const { type } = new Piece();
				console.log(`a piece has been requested by ${player} in room ${room}`);
				socket.emit('new-piece-event', { pieces: type });
			});
		});
	}
};
