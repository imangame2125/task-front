import { FC, PropsWithChildren, useState } from 'react'
import IconElement from '../iconElement/IconElement'
import { ReactComponent as Wifi } from '../../assests/mobile/Wifi.svg'
import { ReactComponent as Cellular } from '../../assests/mobile/Cellular.svg'
import { ReactComponent as Battery } from '../../assests/mobile/Battery.svg'
import { ReactComponent as Avator } from '../../assests/mobile/Avatar-no-tick.svg'
import { ReactComponent as Bot } from '../../assests/mobile/Bot.svg'
import { More } from 'iconsax-react'

const MobileMainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='w-full flex mx-auto mt-4 flex-wrap'>
      <header className='flex justify-between w-full mx-4'>
        <p className='text-lg font-semibold'>12:15</p>
        <div className='flex items-center gap-x-2'>
          <IconElement className='w-5 h-5' icon={Cellular} />
          <IconElement className='w-5 h-5' icon={Wifi} />
          <IconElement className='w-5 h-5' icon={Battery} />
        </div>
      </header>

      <div className='mx-4 flex items-center mt-2 justify-between w-full'>
        <div className='flex items-center gap-x-2'>
          <IconElement className='w-5 h-5 cursor-pointer' icon={Avator} />
          <p className='text-2xl font-semibold'>Van Arsdel</p>
        </div>
        <div className='flex items-center gap-x-5'>
          <IconElement className='w-5 h-5 cursor-pointer' icon={Bot} />
          <IconElement className='w-5 h-5 cursor-pointer' icon={More} />
        </div>
      </div>
      <div className='w-full flex mx-4 justify-around items-center mt-3'>
        <div className='flex items-center justify-around w-full'>
          <p className='text-sm text-[#242424] cursor-pointer border-b-[#5B5FC7]'>Tab 1</p>
          <p className='text-sm text-[#242424] cursor-pointer border-b-[#5B5FC7]'>Tab 2</p>
          <p className='text-sm text-[#242424] cursor-pointer border-b-[#5B5FC7]'>Tab 3</p>
        </div>
      </div>

      <div className='mx-4 '>{/* <Card title='Chart 1' /> */}</div>
    </div>
  )
}

export default MobileMainLayout
