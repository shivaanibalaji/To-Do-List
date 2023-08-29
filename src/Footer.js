import React from 'react'

const Footer = ({length}) => {

    const year = new Date();
  return (
    <footer>
      The List {(length ===1 || length ===0)?"Item": "Items"} is {length} <br/>
      Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer