const express = require('./express');
const game = require('./game');

module.exports = {
	game,
	express,
	server: {
		host: '0.0.0.0',
		port: process.env.PORT || 8080,
		env: process.env.NODE_ENV || 'test',
		get url() {
			return `http://${this.host}:${this.port}`;
		},
	},
};