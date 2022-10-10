import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-orange-100">
      <main className="flex justify-between items-center bg-white w-full max-w-6xl h-[80vh] rounded-[40px] p-12">
        {children}
      </main>
  </div>
  )
}