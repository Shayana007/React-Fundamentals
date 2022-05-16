import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username: '',
              comments: '',
              topic: 'react'
         }
     }
     handlerUsernameChange = (event) => {
         this.setState({
             username: event.target.value
         })

     }
     handlerCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })

    }
    handlerTopicChange =(event) =>{
        this.setState({
            topics: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handlerUsernameChange}/>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handlerCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select  value={this.state.topic}> onchange={this.handlerTopicChange}
                    <option value="react">react</option>
                    <option value="angular">angular</option>
                    <option value="vue">vue</option>
                
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
               
            
        )
    }
}

export default Form
