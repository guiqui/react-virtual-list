import React,{Component} from 'react'
import sizeMe from 'react-sizeme'
import './VirtualList.css'

export class VirtualListCore extends Component{
    constructor(props){
        super(props);
        this.numVisibleItems=0;
        this.state={
            currentIndx:0       
        }
        let calcHeight=this.props.data&&this.props.itemheight?this.props.data.length * this.props.itemheight:0;
        this.containerStyle={height:calcHeight}
    }

    scollPos=(e)=>{
        if (e.target.id !=="vListViewPort")
            return;
        let scrollTop=e.target.scrollTop;
        let currentIndx=Math.trunc(scrollTop/this.props.itemheight)
        if (currentIndx!==this.state.start){
            this.setState({currentIndx:currentIndx})
        }
       
    }

    recalculate=() =>{
        const height = this.props.size?this.props.size.height:0;
        this.numVisibleItems=Math.trunc(height / this.props.itemheight)+1;
        let currentIndx=this.state.currentIndx;
        let datalength=this.props.data?this.props.data.length:1;
        currentIndx=currentIndx-this.numVisibleItems>=datalength?currentIndx-this.numVisibleItems:currentIndx;
        this.start=currentIndx;
        this.end=currentIndx+this.numVisibleItems>=datalength ? datalength-1:currentIndx+this.numVisibleItems;
    }

  

    renderRows(){
        let result=[];
        if (!this.props.data)
            return result;
        if (!this.props.renderItems)
            return result;    
        for (let i=this.start;i<this.end+1;i++){
            let style ={position: 'absolute',top:i*this.props.itemheight,height:this.props.itemheight}
            let element=this.props.renderItems(this.props.data[i],i,style);
            result.push( this.props.renderItems(this.props.data[i],i,style));
        }
        return result;
    }
    
    render(){
        this.recalculate();
        return (
        <div id="vListViewPort"  className={this.props.className?this.props.className:''}  
            style={ {position: 'relative',overflow: 'scroll'}} 
            onScroll={this.scollPos} >
            <div id="vlistItemContainer" className="itemContainer" style={this.containerStyle}>
                {this.renderRows()}    
            </div>
        </div>)
    }

}
export default sizeMe({ monitorHeight: true })(VirtualListCore)
