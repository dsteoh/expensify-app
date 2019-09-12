import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout; 

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});