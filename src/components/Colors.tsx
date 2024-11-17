import React from 'react'
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const sizes = ['s', 'm', 'x', 'xl', 'xxl']

const colors = [
  {
    label: 'blue',
    color: 'bg-semantic-blue'
  },
  {
    label: 'yellow',
    color: 'bg-semantic-yellow'
  },
  {
    label: 'green',
    color: 'bg-semantic-green'
  }
]



const Colors = () => {
  let [selected, setSelected] = useState(colors[0].label)


  return (
    <div className='mt-[24px]'>
      <div>
        <div className='mt-[32px] text-neutral-gray mb-[18px] text-[12px]'>AVAILABLE COLORS</div>
        <div className="w-full">
          <div className="mx-auto w-full">
            <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-x-2 flex items-center">
              {colors.map((plan) => (
                <Radio
                  key={plan.label}
                  value={plan}
                  className={`group w-[24px] h-[24px] rounded-full border-none relative flex items-center justify-center cursor-pointer ${plan.color}  text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
                >

                  <span className="invisible absolute  w-[32px] h-[32px]  border rounded-full  group-data-[checked]:border-black group-data-[checked]:visible" />
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className='mt-[32px] mb-[18px] text-neutral-gray text-[12px]'>SELECT SIZE</div>
        <div className='mt-16px'>
          <div className="mx-auto w-full">
            <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-x-2 flex items-center">
              {sizes.map((size) => (
                <Radio

                  value={size}
                  className={`group w-[40px] h-[40px]   relative flex items-center justify-center cursor-pointer   shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
                >
                  <div>{size}</div>
                  <span className="invisible absolute inset-0 border group-data-[checked]:border-black group-data-[checked]:visible" />
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Colors