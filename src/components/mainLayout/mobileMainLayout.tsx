import { FC, PropsWithChildren } from 'react'

const MobileMainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-full'>
      <h1>mobile</h1>
      {children}
    </div>
  )
}

export default MobileMainLayout
