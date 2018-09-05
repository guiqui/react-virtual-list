import React,{Component} from 'react'
import sizeMe from 'react-sizeme'
import './VirtualList.css'

class VirtualList extends Component{
    constructor(props){
        super(props);
        this.numVisibleItems=0;
        this.state={
            currentIndx:0       
        }
        this.containerStyle={height:this.props.data.length * this.props.itemheight}
    }

    scollPos=()=>{
        let currentIndx=Math.trunc(this.refs.viewPort.scrollTop/this.props.itemheight)
        if (currentIndx!==this.state.start){
            this.setState({currentIndx:currentIndx})
        }
       
    }

    recalculate=() =>{
        const { height } = this.props.size
        this.numVisibleItems=Math.trunc(height / this.props.itemheight)+1;
        let currentIndx=this.state.currentIndx;
        currentIndx=currentIndx-this.numVisibleItems>=this.props.data.length?currentIndx-this.numVisibleItems:currentIndx;
        this.start=currentIndx;
        this.end=currentIndx+this.numVisibleItems>=this.props.data.length ? this.props.data.length-1:currentIndx+this.numVisibleItems;
    }
    // shouldComponentUpdate(){
    //     console.log('should')
    //     return true;
    // }
    renderRows(){
        let result=[];
        for (let i=this.start;i<this.end+1;i++){
           
            let item=this.props.data[i];
            let objProperties={
                key:i,
                style:{position: 'absolute',top:i*this.props.itemheight,height:this.props.itemheight},
                data:item
            }
            result.push(React.createElement(this.props.itemRenderer,objProperties));
        }
        return result;
    }
    
    render(){
        this.recalculate();
        return (
        <div ref="viewPort" className={this.props.className}  
            style={ {position: 'relative',overflow: 'scroll'}} 
            onScroll={this.scollPos} >
            <div className="itemContainer" style={this.containerStyle}>
                {this.renderRows()}    
            </div>
        </div>)
    }

}
export default sizeMe({ monitorHeight: true })(VirtualList)