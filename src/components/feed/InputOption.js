import React from 'react'
import './InputOption.css'

function InputOption({Icon,text,color}) {
  return (
    <div className='inputOption'>
      <Icon style={{color:color}} />
      <h2>{text}</h2>
    </div>
  )
}

export default InputOption
