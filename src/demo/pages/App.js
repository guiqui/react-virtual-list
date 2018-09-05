import React,{Component} from 'react';
import VirtualList from 'lib/VirtualList';
import ItemRenderer from './ItemRenderer';
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
       
        <VirtualList className="list" data={this.data} itemheight={50} itemRenderer={ItemRenderer}/>
      </div>

    )
  }

}

export default App;
