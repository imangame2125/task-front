import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import IconElement from '../iconElement/IconElement'
import { More } from 'iconsax-react'
import { ReactComponent as VanIConBlack } from '../../assests/icons/VanIconBlack.svg'
import { ReactComponent as Maxi } from '../../assests/icons/maxiBig.svg'
import Card from '../card/Card'
import cardImage from '../../assests/images/card-img.svg'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Assigned to Me', path: '/assigned' },
  { name: 'Chat', path: '/chat' },
]

const Main: FC = () => {
  return (
    <main className='w-full'>
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
      <Card
        timePeriods={{
          period1: '7 days',
          period2: '30 days',
          period3: '60 days',
        }}
        label1='Label 1'
        label2='Label 2'
        title='title-title'
        description='lorem is'
        imageUrl={cardImage}
      />
    </main>
  )
}

export default Main
