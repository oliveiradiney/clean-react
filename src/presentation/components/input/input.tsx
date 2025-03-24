import React, { useContext } from 'react'
import './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string
}

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className='inputWrap'>
      <input
        data-testid={props.name}
        {...props}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <span
        data-testid={`${props?.name}-status`}
        title={getTitle()}
        className='status'
      >
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
