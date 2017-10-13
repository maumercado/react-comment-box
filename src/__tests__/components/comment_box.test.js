/* global expect, it, describe, beforeEach, configureMockStore */
import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../../components/comment_box';

describe('CommentBox', () => {
    let component;
    let store;

    beforeEach(() => {
        const middlewares = [];
        const mockStore = configureMockStore(middlewares);
        store = mockStore({});
        component = mount(<CommentBox store={store} />);
    });

    it('has the correct class', () => {
        expect(component.find('form').hasClass('comment-box')).toBeTruthy();
    });

    it('has a text area', () => {
        expect(component.find('textarea')).toHaveLength(1);
    });

    it('has a button', () => {
        expect(component.find('button')).toHaveLength(1);
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', {
                target: { value: 'new comment' }
            });
        });

        it('shows that text in the text area', () => {
            expect(component.find('textarea').props().value).toBe(
                'new comment'
            );
        });

        it('when submitted clears input', () => {
            component.simulate('submit', { preventDefault() {} });
            expect(component.find('textarea').props().value).toBe('');
        });
    });
});
