"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState('')
  const handleLogin = async ()=>{
    if(userId === 'admin' && password ==='admin'){
      console.log('login');
      localStorage.setItem('isAdminAuthenticated', 'true');
      router.push('/admin/dashboard')
    }
    else{
      console.log("no")
      setLoginFailed("Wrong Id or Password")
    }
  }
  return (
    <div className='container py-5'>
      <h1 className='text-center text-danger'>Admin</h1>
      <div className='row justify-content-center mt-4'>
        <div className='col-6'>
        <p className='text-danger my-3'>{loginFailed}</p>
          <form>
            <input className='form-control my-2' value={userId} onChange={(e)=> setUserId(e.target.value)} placeholder='User ID'/>
            <input className='form-control my-2' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
            <div className='text-center'><button type='button' className='btn btn-danger' onClick={handleLogin}>Log In</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}
