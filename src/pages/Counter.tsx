import React from 'react'
// import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/app/Counter'

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='w-[164px] h-[44px] flex justify-between border-2 border-zinc-200 rounded-[4px] items-center'>
        <button className='ml-[12px]' onClick={() => dispatch(decrement())}>
          <img src='/images/Minus.png'/>
        </button>
        <span>{count}</span>
        <button className='mr-[12px]' onClick={() => dispatch(increment())}>
        <img src='/images/Plus.png'/>
        </button>


      </div>
    </div>
  )
}

export default Counter;