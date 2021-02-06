import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';

import InputField from '../ErrorMessage'

describe('InputField component', () => {
    test('should match to snapshot', () => {
        const component = shallow(<InputField />);
        expect(component.html()).toMatchSnapshot();
    })
    test('should display asterisk when field is required', () => {
        const component = shallow(<InputField required />);

        expect(component.find('.form__asterisk')).toEqual(true);
    })


})
