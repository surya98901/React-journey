import UserClass from "./UserClass";
import React from "react";

export class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render(){
        console.log("parent render");
        return (
            <div>
                <h1>
                    About page
                </h1>
                <UserClass name="John" discription="This is a user component"/>
            </div>
        )
    }
}


// export const About = ()=>{
//     return (
//         <div>
//             <h1>
//                 About page
//             </h1>
//             <UserClass name="John" discription="This is a user component"/>
//         </div>
//     )
// }