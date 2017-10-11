import React from 'react';
import { shallow } from 'enzyme';

import store from '../../index';
import CommentList from '../../components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = ['New Comment', 'Other New Comment'];

        component = shallow(<CommentList />, { context: { store } });

        component.setProps({
            comments: props
        });
    });

    it('has the correct class', () => {
        expect(component.hasClass('comment-list')).toBeTruthy();
    });

    it('shows and LI for each comment', () => {
        expect(component.find('li').length).toHaveLength(2);
    });

    it('shows each comment that is provided', () => {
        expect(component.text()).toContain('New Comment');
        expect(component.text()).toContain('Other New Comment');
    });

});
