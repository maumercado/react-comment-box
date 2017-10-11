import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../../components/app';

describe('App', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App />);
    });

    it('shows a comment box', () => {
        // see http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html
        expect(component.find('CommentBox').shallow().hasClass('comment-box')).toBeTruthy();
    });

    it('shows a comment list', () => {
        // all of this because comment list is actually a container and not a react component
        expect(component.find('Connect(CommentList)').type().WrappedComponent({ comments: [] }).props.className).toEqual('comment-list')
    });
});
