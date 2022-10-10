import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const PopularDishes = ({data}) => {
  return (
    <section className='max-w-[70vw]'>
      <header className='mb-8 font-semibold text-2xl'>
        <h2>Popular Dishes</h2>
      </header>
      <div className='flex gap-8 flex-wrap'>
        {data.map((dish, index) => 
            <div key={index}>
              <img src={`${dish.image ??'https://www.thespruceeats.com/thmb/Z6IWF7c9zywuU9maSIimGLbHoI4=/3000x2000/filters:fill(auto,1)/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg'}`}
                alt={data.title} className='w-52 h-36 bg-red-50 object-cover rounded-3xl' />
              <div className='mt-4'>
                <h3>{dish.title ?? 'Classic Ceasar Salad'}</h3>
                <div className='flex gap-6 mt-2'>
                  <div className='flex items-center'>
                    <AiFillStar className='text-gray-200' />
                    <p className="ml-1 font-semibold">{dish.star_rating ?? 4.5}</p>
                  </div>
                  <ul className='flex gap-2'>
                    {dish.tags.map(tag => 
                      <li className='text-gray-400'>{tag}</li>
                      )}
                  </ul>
                </div>
              </div>
            </div>
        )}
      </div>
    </section>
  )
}
