import React,{Component} from 'react';
import Vlist from 'components/virtualize/Vlist';
import './App.css'
class App extends Component{
  constructor(props){
    super(props)
    this.data = []
    for (let i=0;i<10000;i++){
      this.data.push({name: `Row ${i}`});
    }
  }


  render(){
    return (
      <div className="app-container">
        <Vlist data={this.data} itemheight={30}/>
      </div>

    )
  }

}

export default App;
