import React, { useState } from 'react'
import './login-styles.scss'
import { Header, Input, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className='login'>
      <Header />
      <Context.Provider value={state}>
        <form className='form'>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu email' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <button className='submit' type='submit'>
            Entrar
          </button>
          <span className='link'>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
