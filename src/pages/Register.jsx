import React from 'react'

export const Register = () => {
  return (
    <div className='bg-azul-500 h-screen flex items-center content-center justify-center'>
      <div className='bg-white p-16 flex flex-col items-center rounded-md'>
        <form action="" className='flex flex-col gap-4 items-center' >
          <span className='text-2xl font-bold text-azul-800'>Evan Chat</span>
          <span className='logo'>Registre-se</span>
          <div className="flex flex-col gap-2">
            <input type="text" placeholder='display name' className="block border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
            <input type="email" placeholder='email' className="block border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
            <input type="password" placeholder='password' className="block border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
            <input type="file" className="hidden" />
          </div>
          <button>Login</button>
        </form>
        <p>Ainda não possuí uma conta?</p>
      </div>
    </div>
  )
}

