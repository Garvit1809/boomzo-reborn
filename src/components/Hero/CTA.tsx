"use client";
import React from 'react'
import MyButton from '../ui/mybutton'
import { useRouter } from 'next/navigation'

export default function CTA() {
  const navigate = useRouter();
  return (
    <div>
      <section className="bg-background  bg-center bg-repeat-x "
      style={{
        backgroundImage: "url('/cta.png')",
        backgroundSize: "cover",
        WebkitBackdropFilter: "blur(5px)",
        }}>
    <div className="mx-auto max-w-screen-xl px-4 py-20  lg:flex lg:h-fit lg:items-center" >
    

      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          <strong className="font-extrabold text-transparent bg-gradient-to-r from-[#542daf] via-purple-500 to-[#ff9100] bg-clip-text sm:block "> Get Free Consultation </strong>
        </h1>
        <p className="mt-4 text-sm md:text-xl/relaxed">
        Support customers and collaborate across your organization in one beautiful workspace.
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <MyButton onClick={() => navigate.push('/contact') } className='bg-opacity-75'> Get consultation</MyButton>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}
