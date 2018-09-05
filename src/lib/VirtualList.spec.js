import React from 'react';
import {VirtualListCore} from './VirtualList';
import { shallow ,mount} from 'enzyme';
import sinon from 'sinon'
const data = []
    for (let i=0;i<1000;i++){
        data.push({name: `Row ${i}`});
    }
function TestItemRenderer(props){
    return <div>{props.name}</div>
}    

describe('VirtualListCore Initialise propertly ',()=>{
    it ('It mount properly when no property is given',()=>{
        const wrapper = shallow(<VirtualListCore />);
        expect(wrapper.find('viewPort')).toBeDefined();
        expect(wrapper.find('vlistItemContainer')).toBeDefined();
        expect(wrapper.find('vlistItemContainer').children().length).toBe(0)
        expect(wrapper.state('currentIndx')).toBe(0);
       // expect(wrapper.instance().numVisibleItems).toBe(0)
    })
    it('Render propertly when adding data',()=>{
        const wrapper = shallow(<VirtualListCore data={data} itemheight={30} size={{height:300}}/>);
        expect(wrapper.find('vlistItemContainer').children().length).toBe(0)
    })
    it('Render propertly when adding data',()=>{
        const wrapper = shallow(<VirtualListCore data={data} itemheight={30} size={{height:300}} itemRenderer={TestItemRenderer}/>);
        expect(wrapper.find('vlistItemContainer').children().length).toBe(0)
    })
})

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