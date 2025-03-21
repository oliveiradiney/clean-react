import React from 'react'
import './login-styles.scss'
import { Spinner } from '@/presentation/components'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'

const Login: React.FC = () => {
  return (
    <div className='login'>
      <Header />
      <form className='form'>
        <h2>Login</h2>
        <div className='inputWrap'>
          <input type='email' name='email' placeholder='Digite seu e-mail' />
          <span className='status'>🔴</span>
        </div>

        <div className='inputWrap'>
          <input
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />
          <span className='status'>🔴</span>
        </div>

        <button className='submit' type='submit'>
          Entrar
        </button>
        <span className='link'>Criar conta</span>
        <div className='errorWrap'>
          <Spinner />
          <span className='error'>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
