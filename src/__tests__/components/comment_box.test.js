import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from '../../components/comment_box';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CommentBox />);
    });

    it('has the correct class', () => {
        expect(component.hasClass('comment-box')).toBeTruthy();
    });

    it('has a text area', () => {
        expect(component.find('textarea')).toHaveLength(1);
    });

    it('has a button', () => {
        expect(component.find('button')).toHaveLength(1);
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', { target: { value: 'new comment' } });
        });

        it('shows that text in the text area', () => {
            expect(component.find('textarea').props().value).toBe('new comment');
        });

        it('when submitted clears input', () => {
            component.simulate('submit', { preventDefault() { } });
            expect(component.find('textarea').props().value).toBe('');
        });
    });

});
