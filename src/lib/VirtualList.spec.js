import React from 'react';
import VirtualList from './VirtualList';
import renderer from 'react-test-renderer';
test('Testing for init without params',()=>{
    const component=renderer.create(<VirtualList />)
    expect(1).toBe(1);

})