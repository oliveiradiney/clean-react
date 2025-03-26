import React, { useEffect, useState } from 'react'
import './login-styles.scss'
import { Header, Input, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import type { Validation } from '@/presentation/protocols/validation'
import type { Authentication } from '@/domain/usecases'

type Props = {
  validation?: Validation
  authentication?: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
    authentication.auth({ email: state.email, password: state.password })
  }

  return (
    <div className='login'>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className='form' onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu email' />
          <Input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <button
            data-testid='submit'
            disabled={!!state.emailError || !!state.passwordError}
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
