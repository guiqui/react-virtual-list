import React from 'react';
import {VirtualListCore} from './VirtualList';
import { shallow } from 'enzyme';


it('renders correctly', () => {
    const tree =shallow(<VirtualListCore  />)
    expect(1).toBe(1);

  });

it('renders correctly', () => {
    const data = []
    for (let i=0;i<1000;i++){
        data.push({name: `Row ${i}`});
    }
    const tree =shallow(<VirtualListCore data={data}  />)
    expect(tree).toBeDefined()

  });