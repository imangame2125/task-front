import { FC, PropsWithChildren } from 'react'
import Header from '../header/Header'
import Navbar from '../Navbar/Navbar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Navbar />
        <main className='w-full p-2'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
