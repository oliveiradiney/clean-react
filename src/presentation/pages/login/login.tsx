import React, { useEffect, useState } from 'react'
import './login-styles.scss'
import { Header, Input, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import type { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email)
    })
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className='login'>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className='form'>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu email' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <button
            data-testid='submit'
            disabled
            className='submit'
            type='submit'
          >
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
