import React, { FC } from 'react'
import { ReactComponent as TeamsIcon } from '../../assests/icons/teams.svg'
import { ReactComponent as Avator } from '../../assests/icons/Avatar.svg'
import IconElement from '../iconElement/IconElement'
import { ArrowLeft2, ArrowRight2, More } from 'iconsax-react'
import { ReactComponent as Mini } from '../../assests/icons/Minimize.svg'
import { ReactComponent as Maxi } from '../../assests/icons/Maximize.svg'
import { ReactComponent as Close } from '../../assests/icons/Close.svg'
const Header: FC = () => {
  return (
    <header className='bg-custom-gradient-navbar-header h-12 w-full border-b mx-auto'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center cursor-pointer ml-5'>
          <IconElement icon={TeamsIcon} className='w-6 h-12 cursor-pointer' />
        </div>

        <div className='flex gap-x-4 w-2/4 items-center cursor-pointer'>
          <IconElement className='w-5 h-5 cursor-pointer' icon={ArrowLeft2} />
          <IconElement className='w-5 h-5 cursor-pointer' icon={ArrowRight2} />
          <input placeholder='search' className='w-full' type='search' />
        </div>

        <div className='flex w-1/6 gap-x-4 items-center justify-center cursor-pointer'>
          <IconElement icon={More} className='w-5 h-5 cursor-pointer ' />
          <IconElement icon={Avator} className='w-8 h-8 cursor-pointer' />

          <div className="flex items-center gap-x-6 cursor-pointer">
            <IconElement icon={Mini} className='w-2.5 h-2.5 text-white cursor-pointer' />
            <IconElement icon={Maxi} className='w-2 h-2 text-white cursor-pointer' />
            <IconElement icon={Close} className='w-2.5 h-2.5 cursor-pointer' />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
