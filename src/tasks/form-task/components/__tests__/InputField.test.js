import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';

import InputField from '../ErrorMessage'

describe('InputField component', () => {
    test('should match to snapshot', () => {
        const component = shallow(
            <InputField
                errors={['Test message']}
            />);
        expect(component.html()).toMatchSnapshot();
    })


})
