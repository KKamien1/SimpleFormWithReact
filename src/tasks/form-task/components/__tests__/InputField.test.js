import React from 'react';
import { shallow, mount } from 'enzyme';

import InputField from '../InputField'

const defaultProps = {
    field: {
        name: 'username',
        value: '',
        touched: false,
        errors: []
    },
    type: 'text',
    required: false,
    children: 'Username',
    onChange: () => { },
    onBlur: () => { },
    placeholder: 'enter text',

}

const createShallowComponent = (props = {}) => {
    const testProps = { ...defaultProps, ...props }
    return shallow(<InputField {...testProps} />)
}

describe('InputField component', () => {
    test('should match to snapshot', () => {
        const component = createShallowComponent();
        expect(component.html()).toMatchSnapshot();
    })
    test('should display asterisk when field is required', () => {
        const component = createShallowComponent({ required: true });
        expect(component.find('.form__asterisk').length).toEqual(1);
    })
    test('should attach change handler', () => {

        const spy = jest.fn();
        const component = createShallowComponent({ onChange: spy });

        component.find('input').simulate('change')

        expect(spy).toBeCalled();
    })
    test('should attach blur handler', () => {

        const spy = jest.fn();
        const component = createShallowComponent({ onBlur: spy });

        component.find('input').simulate('blur')

        expect(spy).toBeCalled();
    })


})
