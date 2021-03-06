import React from 'react';
import { configure, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import Grid from '../../../client/components/Grid';
import { initGrid } from '../../../client/helpers/Grid';

import { regular, isEmpty, isPlaced, isFull, isBlocked } from '../../../client/style/grid.module.css';

const middlewares = [
	// thunk,
	// handleSocket(),
	// requestNewPiece(),
];

configure({ adapter: new Adapter() });

function setup(initState, initProps) {
	const mockStore = configureStore(middlewares);
	const store = mockStore(initState);
	const enzymeWrapper = mount(<Grid { ...initProps  } />);

	return {
		initProps,
		store,
		enzymeWrapper,
	};
}

describe('Grid component testing', () => {
	let initState;
	let initProps;
	const regClass = [
		`${regular} ${isEmpty}`,
		`${regular} ${isFull}`,
		`${regular} ${isPlaced}`,
		`${regular} ${isBlocked}`,
	];

	beforeEach(() => {
		initState = {
			grid: initGrid(),
			pieces: null,
		};
	
		initProps = {
			keyPressHandler: jest.fn(),
			grid: initGrid(),
			tileStyle: regClass,
		};
	});

	it('renders 200 white tiles', () => {
		const { enzymeWrapper } = setup(initState, initProps);
		expect(enzymeWrapper).to.not.be.an('undefined');
		expect(enzymeWrapper.find('[data-jest="tile"]')).to.have.lengthOf(200);
	});
});