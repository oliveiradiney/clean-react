import React from 'react'
import './input-styles.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {}

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className='inputWrap'>
      <input type='email' name='email' placeholder='Digite seu e-mail' />
      <span className='status'>🔴</span>
    </div>
  )
}

export default Input
