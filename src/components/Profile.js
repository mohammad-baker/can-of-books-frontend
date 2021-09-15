
import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
class Profile extends Component {

  render() {
    const user = this.props.auth0.user;
    return (
      <div style={{ color: 'aliceblue'}}>
        <img src={user.picture} alt=""style={{ width: '18rem' }}/>
        <p >name: {user.name}</p>
        <p>email :{user.email}</p>
      </div>
    )
  }
};

export default withAuth0(Profile);
