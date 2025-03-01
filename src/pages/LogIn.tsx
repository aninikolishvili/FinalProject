import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie';

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const onSubmitForm = (e: any) => {
    e.preventDefault();
    setIsLoading(true);


    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        Cookies.set('AccessToken', json.token)
        alert('წარმატებით შეხვედით')
        setIsLoading(false);
      })
      .catch(error => {
        alert('მომხმარებელი ვერ მოიძებნა')
        setIsLoading(false);
      })
  }

  const onEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <div className='max-w-[384px]  mx-auto mt-[32px] '>
        <div className='flex gap-[12px] justify-center items-center'>
          <img src='/images/Logo.png' />
          <h2 className='text-[20px] font-bold'>Admin</h2>
        </div>

        <form onSubmit={onSubmitForm}>
          <div className='mt-[72px] mb-[15px]'>
            <label className='block'>Email</label>
            <input type='text' onChange={onEmailChange} className='w-full p-2 border rounded-md' />
          </div>

          <div>
            <label className='block'>Password</label>
            <input type='password' onChange={onPasswordChange} className='w-full p-2 border rounded-md' />
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='w-full  border-none rounded-[4px] text-white text-[14px] py-[9.5px] px-[140.5px] bg-Neutral-black mt-[40px]'>
              {isLoading ? "Loading..." : "login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn