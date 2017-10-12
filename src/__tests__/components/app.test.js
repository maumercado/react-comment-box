import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'enzyme';
import configureMockStore from 'redux-mock-store'

import App from '../../components/app';


describe('App', () => {
    let component;
    beforeEach(() => {
        const middlewares = [];
        const mockStore = configureMockStore(middlewares);
        component = render(<Provider store={mockStore({ comments: [] })}><App /></Provider>);
    });

    it('shows a comment box', () => {
        expect(component.find('form').hasClass('comment-box')).toBeTruthy();
    });

    it('shows a comment list', () => {
        expect(component.find('ul').hasClass('comment-list')).toBeTruthy();
    });
});
