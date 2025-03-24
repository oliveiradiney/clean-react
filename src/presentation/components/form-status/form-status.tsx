import React, { useContext } from 'react'
import './form-status-styles.scss'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)

  return (
    <div data-testid='error-wrap' className='errorWrap'>
      {state.isLoading && <Spinner className='spinner' />}
      {errorState.main && <span className='error'>{errorState.main}</span>}
    </div>
  )
}

export default FormStatus
