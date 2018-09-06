import React,{Component} from 'react';
import VirtualList from 'lib/VirtualList';

import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.data = []
    for (let i=0;i<1000;i++){
      this.data.push({name: `Row ${i}`});
    }
  }


  render(){

    return (
      <div className="app-container">
       <h1>Virtual List</h1>
       
        <VirtualList className="list" data={this.data} itemheight={50} renderItems={
          (item,index,style)=>
              <div  className='itemRenderer' key={index} style={style}>
                      <img className="itemImage" src="https://i.stack.imgur.com/4QkvN.jpg?s=64&g=1" />
                      <div className="itemTitleContainer">  
                          <div className="itemTitle">{item.name}</div>
                          <div className="itemContent">{item.name}</div>
                      </div>
              </div>
          }/>
      </div>

    )
  }

}

export default App;
