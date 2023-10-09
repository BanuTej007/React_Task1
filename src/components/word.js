import './style.css';
import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
    }
    handleClick=(event)=>{
        const text=event.target.value;
        const words=text.split(/\s+/).filter(word => word!=='');
        const count=words.length;
        this.setState({count})
    }
    render(){
        return(
            <div class='c1'>
                <h1>Responsive Paragraph Word Counter</h1>
                <textarea onChange={this.handleClick}></textarea>
                <p>Word Count: {this.state.count} </p>
            </div>
        )
    }
}

export default Counter;