import React from 'react'

const LogIn = () => {
  return (
    <div className='max-w-[384px] gap-[12px] flex items-center mx-auto mt-[32px] justify-center bg-lime-100'>
        <img src='/images/Logo.png'/>
        <h2 className='size-[20px] font-bold'>Admin</h2>

        <form>
            <div>
                <label></label>
                <input/>
            </div>

            <div>
                <label></label>
                <input/>
            </div>
        </form>
    </div>
  )
}

export default LogIn