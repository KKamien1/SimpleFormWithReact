import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';

import { FormTaskComplete } from '../FormTaskComplete'

describe('FormTaskComplete', () => {

    test('should match snapshot', () => {
        const wrapper = shallow(<FormTaskComplete />);
        expect(wrapper.html()).toMatchSnapshot();
    })
    test('should contain form element', () => {
        const wrapper = shallow(<FormTaskComplete />);
        expect(wrapper.find('form')).toBeTruthy()
    })
    test('should contain 2 fieldsets', () => {
        const wrapper = shallow(<FormTaskComplete />);
        expect(wrapper.find('fieldset').length).toBe(2);
    })

    it('renders legend text', () => {
        render(<FormTaskComplete />);
        expect(screen.getByText('Personal Info')).toBeInTheDocument();
        expect(screen.getByText('Personal Info')).toBeInTheDocument();
    })

});