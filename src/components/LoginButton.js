import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
export class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logInstate: false
        }
    
      }
    render() {
        
        return (
            <div>
                               <Button href="#">login</Button>
 
            </div>
        )
    }
}

export default LoginButton
