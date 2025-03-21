import React from 'react'
import { createRoot } from 'react-dom/client'

import '@/presentation/styles/global.scss'
import { Router } from '@/presentation/components'

const main = document.getElementById('main')
const root = createRoot(main)

root.render(<Router />)
