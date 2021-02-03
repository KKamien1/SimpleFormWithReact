import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import { FormTaskComplete } from './FormTaskComplete'

configure({ adapter: new Adapter() });

describe('FormTaskComplete', () => {

    test('should match snapshot', () => {
        const wrapper = shallow(<FormTaskComplete />);
        expect(wrapper.html()).toMatchSnapshot();
    })

});