import React from 'react';
import {VirtualListCore} from './VirtualList';
import { shallow ,mount} from 'enzyme';

const data = []
    for (let i=0;i<1000;i++){
        data.push({name: `Row ${i}`});
    }
function TestItemRenderer(props){
    return <div  style={props.style}>{props.data.name}</div>
}    

describe('VirtualListCore Initialise propertly ',()=>{
    it ('It mount properly when no property is given',()=>{
        const wrapper = shallow(<VirtualListCore />);
        expect(wrapper.find('#viewPort')).toBeDefined();
        expect(wrapper.find('#vlistItemContainer')).toBeDefined();
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(0)
        expect(wrapper.state('currentIndx')).toBe(0);
       // expect(wrapper.instance().numVisibleItems).toBe(0)
    })
    it('Render propertly when no item renderer',()=>{
        const wrapper = shallow(<VirtualListCore data={data} itemheight={30} size={{height:300}}/>);
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(0)
    })
    it('Render propertly when adding data',()=>{
        const wrapper = shallow(<VirtualListCore data={data} itemheight={30} size={{height:300}} itemRenderer={TestItemRenderer}/>);
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(12);
        let count=0;
        wrapper.find('#vlistItemContainer').children().forEach((node) => {
            expect(node.prop('style')).toBeDefined();
            expect(node.prop('style').height).toBe(30);
            expect(node.prop('style').top).toBe(count*30);
            count=count+1;
            //expect(node.prop('style').toHaveStyleRule('height', 30);
          });
    })
})

describe('Test Changing Data ',()=>{
    it ('We should render children when changing data',()=>{
        const wrapper = shallow(<VirtualListCore itemheight={30} size={{height:300}} itemRenderer={TestItemRenderer}></VirtualListCore>);
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(0)
        wrapper.setProps({ data: data});
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(12)

    })
})

describe('Test Changing Size ',()=>{
    it ('We should render children when changing sizes',()=>{
        const wrapper = shallow(<VirtualListCore data= {data} itemheight={30} size={{height:300}} itemRenderer={TestItemRenderer}></VirtualListCore>);
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(12)
        wrapper.setProps({ size: {height:600}});
        expect(wrapper.find('#vlistItemContainer').children()).toHaveLength(22)
        let count=0;
        wrapper.find('#vlistItemContainer').children().forEach((node) => {
            expect(node.prop('data').name).toBe(`Row ${count}`);
            expect(node.prop('style')).toBeDefined();
            expect(node.prop('style').height).toBe(30);
            expect(node.prop('style').top).toBe(count*30);
            count=count+1;
            //expect(node.prop('style').toHaveStyleRule('height', 30);
          });

    })
})

describe('Test scrolling',()=>{
    it ('Children should update position',()=>{
        const wrapper = mount(<VirtualListCore data= {data} itemheight={30} size={{height:300}} itemRenderer={TestItemRenderer}></VirtualListCore>);
        wrapper.simulate('scroll',{target:{id:"vListViewPort",scrollTop:60}})
        let count=2;
        wrapper.find('#vlistItemContainer').children().forEach((node) => {
            expect(node.prop('data').name).toBe(`Row ${count}`);
            count=count+1;
          });


    })

    it ('Event from other target Should not trigger scroll',()=>{
        const wrapper = mount(<VirtualListCore data= {data} itemheight={30} size={{height:300}} itemRenderer={TestItemRenderer}></VirtualListCore>);
        wrapper.simulate('scroll',{target:{id:"other",scrollTop:60}})
        let count=0;
        wrapper.find('#vlistItemContainer').children().forEach((node) => {
            expect(node.prop('data').name).toBe(`Row ${count}`);
            count=count+1;
          });


    })
})