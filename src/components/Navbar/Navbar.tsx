import React, { FC } from 'react'

const Navbar:FC = () => {
  return (
    <div className="bg-custom-gradient-navbar-header w-full sm:w-16 h-12 sm:h-screen flex sm:flex-col fixed bottom-0 sm:static">
    <div className="flex sm:flex-col justify-around sm:justify-start items-center sm:items-start p-4">
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Activity</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Chat</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Teams</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Calendar</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Calls</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Files</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Van Arsdel</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">...</a>
      <a href="#" className="py-2 sm:py-4 hover:text-gray-300 text-xs">Apps</a>
    </div>
  </div>
  )
}

export default Navbar
