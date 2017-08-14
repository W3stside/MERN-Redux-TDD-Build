import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import TestComponent from '../../../app/components/TestComponent';

describe('<TestComponent />', () => {
    const wrapper = shallow(<TestComponent />);
    it('it should find 3 div tags', () => {
        expect(wrapper.find('div')).to.have.length(3);
    });
    it('should find 1 a tag', () => {
        expect(wrapper.find('a')).to.have.length(1);
    });
    it('should find 1 h1 tag', () => {
        expect(wrapper.find('h1')).to.have.length(1);
    });
    it('should find 2 Link tags', () => {
        expect(wrapper.find('Link')).to.have.length(2);
    });
});
