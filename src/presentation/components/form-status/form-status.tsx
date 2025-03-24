import React, { useContext } from 'react'
import './form-status-styles.scss'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid='error-wrap' className='errorWrap'>
      {isLoading && <Spinner className='spinner' />}
      {errorMessage && <span className='error'>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
