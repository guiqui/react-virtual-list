import React from 'react';
import {VirtualListCore} from './VirtualList';
import { shallow ,mount} from 'enzyme';


it('renders correctly', () => {
    const component =shallow(<VirtualListCore  />)
    expect(1).toBe(1);
    expect(component.find('viewPort')).toBeDefined();
    expect(component.find('vlistItemContainer')).toBeDefined();
    


  });

it('renders correctly', () => {
    const data = []
    for (let i=0;i<1000;i++){
        data.push({name: `Row ${i}`});
    }
    const component =mount(<VirtualListCore data={data}  />)
    component.find('#vListViewPort').simulate('scroll');
    expect(component).toBeDefined()

  });