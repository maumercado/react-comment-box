import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/app';

describe('App', () => {
    it('shows the correct text', () => {
        const app = shallow(<App />);
        expect(app.text()).toContain('React simple starter');
    });
});
