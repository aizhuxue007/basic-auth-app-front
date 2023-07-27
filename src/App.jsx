import { useState } from 'react'

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

import './App.css'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAPI = import.meta.env.VITE_SUPABASE_API

console.log(supabaseURL, supabaseAPI)
const supabase = createClient(supabaseURL, supabaseAPI)

function App() {
  

  return (
    <>
      
    </>
  )
}

export default App
