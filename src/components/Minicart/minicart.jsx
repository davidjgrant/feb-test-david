import React from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import MinicartItem from '../Minicart-Item/minicartItem'

export const Minicart = ({ data }) => {
  return (
    <aside className='h-full w-[35vw] p-2'>
      <header className='font-semibold text-2xl flex justify-between items-center mb-6'>
        <h2>My order</h2>
        <HiOutlinePencilAlt className='text-orange-400' />
      </header>
      {data.map((cartItem, index) => 
        <MinicartItem key={index} dish={cartItem} />
      )}
    </aside>
  )
}
