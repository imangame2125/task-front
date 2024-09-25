import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import IconElement from '../iconElement/IconElement'
import { Call, Notification } from 'iconsax-react'
import { ReactComponent as Chat } from '../../assests/icons/chat.svg'
import { ReactComponent as TeamsIcon } from '../../assests/icons/Teams-gray.svg'
import { ReactComponent as Calendar } from '../../assests/icons/Calendar.svg'
import { ReactComponent as Files } from '../../assests/icons/Files.svg'
import { ReactComponent as Van } from '../../assests/icons/Van.svg'
import { ReactComponent as Apps } from '../../assests/icons/Apps.svg'
import { ReactComponent as More } from '../../assests/icons/More.svg'
import useDevice from '@/hooks/useDevice'

const navItems = [
  { name: 'Activity', path: '/activity', icon: <IconElement icon={Notification} /> },
  { name: 'Chat', path: '/chat', icon: <IconElement icon={Chat} /> },
  { name: 'Teams', path: '/teams', icon: <IconElement icon={TeamsIcon} /> },
  { name: 'Calendar', path: '/calendar', icon: <IconElement icon={Calendar} /> },
  { name: 'Calls', path: '/calls', icon: <IconElement icon={Call} /> },
  { name: 'Files', path: '/files', icon: <IconElement icon={Files} /> },
  { name: 'Van Arsdel', path: '/van-ardsel', icon: <IconElement icon={Van} /> },
  { name: 'More', path: '/more', icon: <IconElement icon={More} /> },
  { name: 'Apps', path: '/apps', icon: <IconElement icon={Apps} /> },
]

const Navbar: FC = () => {
  const { isTabletOrMobile } = useDevice()
  return (
    <div className='bg-custom-gradient-navbar-header w-20 h-full flex flex-col'>
      <div className='flex flex-col items-center'>
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `
              mt-3 text-[10px] text-nowrap
              ${isActive ? ' border-l-2 border-[#5B5FC7] ' : 'hover:text-gray-300'}
            `}
          >
            <div className='flex flex-col items-center gap-2'>
              <span>{icon}</span>
              <span className='text-[#673333]'>{name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Navbar
