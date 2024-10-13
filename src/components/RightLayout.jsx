'use client'

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RightLayout() {
    const [input, setInput] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/${input}`);
        }
  return (
    <>
    <div className=''>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' className='rounded-3xl text-sm w-full px-4 py-1 text-black' value={input} onChange = {(e) => setInput(e.target.value)} />
        </form>
    </div>
    </>
  )
}
