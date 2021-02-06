import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from '../CheckBox'

describe('CheckBox component', () => {
    test('should match to snapshot', () => {
        const component = shallow(<CheckBox />);
        expect(component.html()).toMatchSnapshot();
    })
    test('should display asterisk when field is required', () => {
        const component = shallow(<CheckBox required />);
        expect(component.find('.form__asterisk').length).toEqual(1);
    })
})
