import React from 'react'
import Spinner from '../spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div data-testid='error-wrap' className='errorWrap'>
      <Spinner className='spinner' />
      <span className='error'>Erro</span>
    </div>
  )
}

export default FormStatus
