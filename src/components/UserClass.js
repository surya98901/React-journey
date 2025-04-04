import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        console.log("child constructor");
        super(props);
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("child componentDidMount");
    }
    render(){
        console.log("child render");
        const {name, discription} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}> count increase</button>
            </div>
        );

    } 
}
export default UserClass;
