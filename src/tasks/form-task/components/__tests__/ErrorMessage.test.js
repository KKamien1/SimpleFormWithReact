import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../ErrorMessage'

const defaultProps = {
    errors: []
}

const createShallowComponent = (props = {}) => {
    const testProps = { ...defaultProps, ...props }
    return shallow(<ErrorMessage {...testProps} />)
}

describe('ErrorMessage component', () => {
    test('should return null if there is no errors', () => {
        const component = createShallowComponent();
        expect(component.html()).toBe(null);
    })
    test('should match to snapshot', () => {
        const component = createShallowComponent({ errors: ['Test message'] });
        expect(component.html()).toMatchSnapshot();
    })
})
