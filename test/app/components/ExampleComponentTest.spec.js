import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

/** EXAMPLE React Component Testing w/Enzyme
********************************************

import DropdownSelect from '../../../app/components/DropdownSelect';

describe('<DropdownSelect />', () => {
    const wrapper = shallow(<DropdownSelect />);
    it('it should find a select tag', () => {
        expect(wrapper.find('select')).to.have.length(0);
    });
    it('should find 4 dynamically rendered option tags', () => {
        expect(wrapper.find('option')).to.have.length(0);
    });
    it('should find 0 divs', () => {
        expect(wrapper.find('div')).to.have.length(0);
    });
});

*********************************************
*/
