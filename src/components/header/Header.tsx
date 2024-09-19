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
    <header className='bg-custom-gradient-navbar-header h-12 w-full mx-4'>
      <nav className='flex items-center justify-around'>
        <div className='flex items-center w-1/3'>
          <IconElement icon={TeamsIcon} className='w-6 h-12' />
        </div>

        <div className='flex w-2/3 gap-x-4 items-center'>
          <IconElement className='w-5 h-5 ' icon={ArrowLeft2} />
          <IconElement className='w-5 h-5 ' icon={ArrowRight2} />
          <input placeholder='search' className='w-full' type='search' />
        </div>

        <div className='flex w-1/3 gap-x-4 items-center justify-center'>
          <IconElement icon={More} className='w-5 h-5 ' />
          <IconElement icon={Avator} className='w-8 h-8' />

          <div className="flex items-center gap-x-6  ml-7 w-1/3">
            <IconElement icon={Mini} className='w-2.5 h-2.5 text-white' />
            <IconElement icon={Maxi} className='w-2 h-2 text-white' />
            <IconElement icon={Close} className='w-2.5 h-2.5' />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
