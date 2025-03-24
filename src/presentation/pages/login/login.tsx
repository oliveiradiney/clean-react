import React from 'react'
import './login-styles.scss'
import { Spinner } from '@/presentation/components'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'

const Login: React.FC = () => {
  return (
    <div className='login'>
      <Header />
      <form className='form'>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite seu email' />
        <Input type='password' name='password' placeholder='Digite sua senha' />

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
