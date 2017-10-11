import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from '../../components/comment_box';

describe('CommentBox', () => {

    it('has a text area', () => {
        const component = shallow(<CommentBox />);
        expect(component.find('textarea')).toHaveLength(1);
    });

    it('has a button', () => {
        const component = shallow(<CommentBox />);
        expect(component.find('button')).toHaveLength(1);
    });
});
