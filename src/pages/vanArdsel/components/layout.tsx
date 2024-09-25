import { FC, PropsWithChildren } from 'react'
import IconElement from '@/components/iconElement/IconElement'
import { NavLink } from 'react-router-dom'
import { ReactComponent as VanIConBlack } from '../../../assests/icons/VanIconBlack.svg'
import { ReactComponent as Maxi } from '../../../assests/icons/maxiBig.svg'
import { More } from 'iconsax-react'

const navLinks = [
  { name: 'Home', path: '/van-ardsel/home' },
  { name: 'Timeline', path: '/van-ardsel/timeline' },
  { name: 'Assigned to Me', path: '/van-ardsel/assigned-to-me' },
  { name: 'Chat', path: '/van-ardsel/chat' },
]

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className='flex items-center justify-between border-b w-full px-4  my-4'>
        <div className='flex items-center gap-x-4'>
          <div className='flex h-10 gap-x-2'>
            <IconElement icon={VanIConBlack} />
            <p className='text-[#242424] text-lg font-bold'>Van Arsdel</p>
          </div>

          <nav className='flex gap-x-4'>
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block p-1 relative text-[#424242] ${isActive ? 'border-b-2 border-[#5B5FC7] rounded-sm text-lg font-bold 	' : ''}`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className='flex items-center gap-x-2'>
          <IconElement icon={Maxi} className='text-[#424242]' />
          <IconElement icon={More} className='text-[#424242]' />
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Layout
