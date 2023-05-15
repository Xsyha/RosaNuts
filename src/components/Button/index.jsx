import React, { useState } from 'react';
import './style.css';

export const Button = ({text, color, disabled}) => {
  const [state, setState] = useState(0);

  const handleClick = () =>{
    setState(state + 1);
  }

  return (
    <React.Fragment>      
      <button style={{background: color}} onClick={handleClick} disabled={disabled}>{text}</button>
      <span>{state}</span>
    </React.Fragment>
  )
}
