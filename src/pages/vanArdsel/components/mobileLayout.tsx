import { FC, PropsWithChildren } from 'react'

const MobileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-full'>
      <h1>page mobile!</h1>
      {children}
    </div>
  )
}

export default MobileLayout
