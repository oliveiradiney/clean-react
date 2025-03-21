import React, { memo } from 'react'
import './login-header-styles.scss'
import Logo from '@/presentation/components/logo/logo'
const LoginHeader: React.FC = () => {
  return (
    <header className='header'>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
