import React from 'react'
 

const Header = props => {
  console.log(props, "props")
  return (
      <div className="Header" key="">
            <h1>NASA Photo of the Day!</h1>
            <h3>{props.title}</h3> 
            <h4>{props.date}</h4> 
        </div>
    )
  }


export default Header;


