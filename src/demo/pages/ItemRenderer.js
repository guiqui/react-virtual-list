import React,{Component} from 'react';
import './itemRenderer.css'
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
export default ItemRenderer;
