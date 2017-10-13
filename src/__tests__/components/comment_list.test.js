/* global expect, it, describe, beforeEach, configureMockStore */

import React from 'react';
import { render } from 'enzyme';

import CommentList from '../../components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const comments = ['New Comment', 'Other New Comment'];
        const middlewares = [];
        const mockStore = configureMockStore(middlewares);

        component = render(<CommentList store={mockStore({ comments })} />);
    });

    it('has the correct class', () => {
        expect(component.hasClass('comment-list')).toBeTruthy();
    });

    it('shows and LI for each comment', () => {
        expect(component.find('li')).toHaveLength(2);
    });

    it('shows each comment that is provided', () => {
        expect(component.text()).toContain('New Comment');
        expect(component.text()).toContain('Other New Comment');
    });
});
