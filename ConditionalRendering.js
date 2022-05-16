import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: false
    }
  }

  render() {
      return(
          this.state.isloggedIn ?(
          <div>welcome</div>
          ):(
          <div>welcome guest</div>
          )
      )
    //   let message
    //   if(this.state.isloggedIn){
    //   message = <div>welcome</div>
    //   }
    //   else{
    //       message = <div>welcome guest</div>
    //   }
    //   return<div>{message}</div>
    // if (this.state.isloggedIn) {
    //   return <div>welcome</div>
    // } else {
    //   return <div>welcome guest</div>
    // }
    // return (
    //     <div>
    //         <div>welcome</div>
    //         <div>welcome guest</div>
    //     </div>
    // )
  }
}

export default ConditionalRendering;
