import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../ErrorMessage'

describe('ErrorMessage component', () => {
    test('should match to snapshot', () => {
        const component = shallow(<ErrorMessage errors={['Test message']} />);
        expect(component.html()).toMatchSnapshot();
    })
    test('should return null if there is no message', () => {
        const component = shallow(<ErrorMessage errors={[]} />);
        expect(component.html()).toBe(null);
    })

})
