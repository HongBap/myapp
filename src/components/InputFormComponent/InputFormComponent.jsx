import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputFormComponent = (props) => {
    const [ValueInput, SetvalueInput] = useState('')
    const  {placeholder = 'Nhập text', ...rests} = props
  return (
    <WrapperInputStyle placeholder={placeholder} valueInput = {ValueInput} {...rests}/>
  )
}

export default InputFormComponent