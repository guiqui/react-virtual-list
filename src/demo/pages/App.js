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
    this.state={
      selectedItem:null
    }
  }

  onItemClick=(item)=>{
    this.setState({selectedItem:item})
  }
  render(){

    return (
      <div className="app-container">
       <h1>Virtual List</h1>
       
        <VirtualList className="list" data={this.data} itemheight={50} renderItems={
          (item,index,style)=>
              <div  className={item==this.state.selectedItem?'itemRenderer itemRendererSelected':'itemRenderer'} 
                    key={index} 
                    style={style} 
                    onClick={(e)=>this.onItemClick(item)}>
                      <img className="itemImage" src="https://i.stack.imgur.com/4QkvN.jpg?s=64&g=1" />
                      <div className="itemTitleContainer">  
                          <div className="itemTitle">{item.name}</div>
                          <div className="itemContent">{item.name}</div>
                      </div>
              </div>
          }/>
          <br />
          {this.state.selectedItem?(<div>{`Selected Record ${this.state.selectedItem.name}`}</div>):(<div>{`No Selected Record`}</div>)

          }
          
      </div>

    )
  }

}

export default App;
