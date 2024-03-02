import React from 'react'

export const Register = () => {
  return (
    <div>
      <div>
        <form action="" className='bg-azul-500 h-screen'>
          <span className='logo'>Evan Chat</span>
          <span className='logo'>Registre-se</span>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file" />
          <button>Login</button>
        </form>
        <p>Ainda não possuí uma conta?</p>
      </div>
    </div>
  )
}

