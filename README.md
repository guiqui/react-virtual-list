# react-virtual-list
[![npm](https://img.shields.io/npm/v/react-vlist.svg?style=flat-square)](http://npm.im/react-vlist)
[![MIT License](https://img.shields.io/npm/l/react-list.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Travis](https://travis-ci.org/guiqui/react-virtual-list.svg?branch=master&style=flat-square)](https://travis-ci.org/guiqui/react-virtual-list)
[![codecov](https://codecov.io/gh/guiqui/react-virtual-list/branch/master/graph/badge.svg)](https://codecov.io/gh/guiqui/react-virtual-list)

This is a list component that support viartualize rendering.
It can be easly customize by providing its own item renderer.

- Super fast. 😛
- Responsive Components!
- Easy to use.
- Easy to Customize with Item Renderers.
- Support thousand of records.
## Demo
Check out a working demo here: https://guiqui.github.io/react-virtual-list/index.html

## Installation
```javascript
npm install react-vlist
```
## Configuration

```javascript
    //1) Import the package
    import Vlist from 'react-vlist'
    //2) Create an Item renderer Component
    class ItemRenderer extends Component{
        constructor(props){    
            super(props)
        }


        render(){
            return (
            <div  className='itemRenderer' style={this.props.style} >
                <img className="itemImage" src="https://i.stack.imgur.com/4QkvN.jpg?s=64&g=1" />
                <div className="itemTitleContainer">  
                    <div className="itemTitle">{this.props.data.name}</div>
                    <div className="itemContent">{this.props.data.name}</div>
                </div>
            </div>)
        }
    }
    //3) Use the Vlist in a component
    class App extends Component{
        constructor(props){
            super(props)
    //4) Create Some data
            this.data = []
            for (let i=0;i<1000;i++){
            this.data.push({name: `Row ${i}`});
            }
        }


        render(){
    //5) Use the component 
            return (
            <div className="app-container">
            <h1>Virtual List</h1>
                <VirtualList className="list" data={this.data} itemheight={50} itemRenderer={ItemRenderer}/>
            </div>

            )
        }
    }
```
