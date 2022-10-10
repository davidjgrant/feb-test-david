import React from 'react'

const MinicartItem = ({dish}) => {
  return (
    <div className='flex mb-4 items-center'>
      <img src={`${dish.image ?? 'https://www.thespruceeats.com/thmb/Z6IWF7c9zywuU9maSIimGLbHoI4=/3000x2000/filters:fill(auto,1)/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg'}`}
        alt={dish.title} className='w-16 h-12 bg-red-50 object-cover rounded-xl mr-2' />
      <div className='flex justify-around items-center gap-2'>
        <p>1 x </p>
        <h3>{dish.title ?? 'Classic Ceasar Salad'}</h3>
        <p className="bold">{dish.price ?? '£34'}</p>
      </div>
    </div>
  )
}

export default MinicartItem