import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from '../CheckBox';
const defaultProps = {
    name: 'usertype',
    value: '',
    required: false,
    children: 'User type',
    options: [true, false],
    checked: false,
    onChange: () => { }
}

const createShallowComponent = (props = {}) => {
    const testProps = { ...defaultProps, ...props }
    return shallow(<CheckBox {...testProps} />)
}

describe('CheckBox component', () => {
    test('should match to snapshot', () => {
        const component = createShallowComponent();
        expect(component.html()).toMatchSnapshot();
    })
    test('should display asterisk when field is required', () => {
        const component = createShallowComponent({ required: true });
        expect(component.find('.form__asterisk').length).toEqual(1);
    })
})
