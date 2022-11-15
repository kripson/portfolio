import React from 'react'
import './CircularText.scss';

export const CircularText = React.memo(({text, deg, className, color, backgroundColor}) => {
  return (
    <div className={`CircularText ${className}`} style={{backgroundColor: backgroundColor}}>
        {text.split('').map((letter, idx) => {
            console.log(letter);
          return <span key={idx} style={{transform: `rotate(${(idx * deg ?? 6)}deg)`, color: color}}>{letter}</span>  
        })}
    </div>
  )
})
