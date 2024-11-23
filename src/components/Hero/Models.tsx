import {  CheckCheck } from 'lucide-react'
import React from 'react'
import MyButton from '../ui/mybutton'
import { useRouter } from 'next/navigation'

export default function Models() {
  const navigate = useRouter();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className='font-semibold text-2xl text-center my-4 mb-6'>We offer two <span className='bg-mygradient text-transparent bg-clip-text'>flexible</span> models</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div
          className="group rounded-2xl border border-orange-400 p-6 shadow-lg sm:order-last sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium group-hover:text-orange-400 text-gray-900">
              Ad Spend
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Boomzo Funded</strong>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-start gap-1 gap-x-2 ">
              <p className=' text-green-500  '><CheckCheck size={20}  /></p>
              <p className="text-gray-700  text-md  leading-tight"><span className='font-semibold'>Ad Spend:</span> We cover it.</p>
            </li>
            <li className="flex items-start gap-1 gap-x-2 ">
              <p className=' text-green-500  '><CheckCheck size={20}  /></p>
              <p className="text-gray-700  text-md  leading-tight"><span className='font-semibold'>Control:</span> We handle everything.</p>
            </li>
            <li className="flex items-start gap-1 gap-x-2 ">
              <p className=' text-green-500  '><CheckCheck size={20}  /></p>
              <p className="text-gray-700  text-md  leading-tight"><span className='font-semibold'>Commission Rate:</span> Higher, due to our investment.</p>
            </li>
          </ul>
          <a
             onClick={() => navigate.push('/contact') } 
            className="mt-8 block rounded-full border  cursor-pointer bg-mygradient px-12 py-3 text-center text-sm font-medium text-white  "
          >
            Get Started
          </a>
        </div>
        <div className="group rounded-2xl border  border-gray-200 hover:border-orange-400 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium group-hover:text-orange-400 text-gray-900">
              Ad Spend
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Client Funded </strong>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
          <li className="flex items-start gap-1 gap-x-2 ">
              <p className=' text-green-500  '><CheckCheck size={20}  /></p>
              <p className="text-gray-700  text-md  leading-tight"><span className='font-semibold'>Ad Spend:</span> You cover it.</p>
            </li>
            <li className="flex items-start gap-1 gap-x-2 ">
              <p className=' text-green-500  '><CheckCheck size={20}  /></p>
              <p className="text-gray-700  text-md  leading-tight"><span className='font-semibold'>Control:</span> Manage your budget.</p>
            </li>
            <li className="flex items-start gap-1 gap-x-2 ">
              <p className=' text-green-500  '><CheckCheck size={20}  /></p>
              <p className="text-gray-700  text-md  leading-tight"><span className='font-semibold'>Commission Rate:</span> Lower, since you fund the ads.</p>
            </li>
          </ul>
          <MyButton  onClick={() => navigate.push('/contact') }  className='mt-8 w-full shadow-sm group-hover:border-orange-400 px-12 py-3 border-gray-200 border-[1px] text-sm font-medium'>Get Started</MyButton>
        </div>
      </div>
    </div>
  )
}
