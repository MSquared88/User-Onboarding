import React from 'react'

const User = props => {
     return (
     <div>
          <h4>Name: <strong>{props.name}</strong></h4>
          <p>Email: <strong>{props.email}</strong></p>
          <p>Password: <strong>{props.password}</strong></p>
     </div>
     )
}

export default User