import IconElement from '@/components/iconElement/IconElement'
import { ArrowDown2, HambergerMenu } from 'iconsax-react'
import { ReactComponent as SearchIcon } from '@/assests/icons/search-icon.svg'
import useDevice from '@/hooks/useDevice'

const Filter = () => {
  const { isTabletOrMobile } = useDevice()
  return (
    <div
      className={`w-full h-20 flex px-5 justify-center border-t border-b items-center ${isTabletOrMobile ? 'hidden' : ''}`}
    >
      <div className='w-3/4 flex items-center gap-x-4'>
        <div className='flex items-center gap-x-2'>
          <IconElement className='text-[#424242] w-8 h-8' icon={HambergerMenu} />
          <div className='flex items-center gap-x-2'>
            <button className='font-semibold text-sm px-4 py-2 flex items-center gap-x-2  bg-[#5B5FC7] rounded text-white'>
              <div className='w-4 h-4 rounded-full border' />
              Text
              <IconElement className='text-white w-3 h-3' icon={ArrowDown2} />
            </button>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242] ' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242]' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
          <div className='border-r-2 text-[#D1D1D1] w-5 h-8'></div>
        </div>

        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242]' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
        </div>

        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242]' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
        </div>

        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242]' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
          <div className='border-r-2 text-[#D1D1D1] w-5 h-8'></div>
        </div>

        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242]' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
        </div>

        <div className='flex items-center gap-x-1'>
          <div className='w-4 h-4 rounded-full border border-[#424242]' />
          <p className='text-[#424242] font-semibold text-sm'>Text</p>
        </div>
      </div>
      <div className='w-1/3 h-full flex items-center'>
        <div className='flex items-center gap-x-2'>
          <p className='text-[#424242] text-sm font-semibold'>Filter</p>
          <div className='flex items-center gap-x-2 '>
            <input
              type='search'
              className='h-8 px-8 w-52 border relative text-sm font-normal rounded border-[#D1D1D1] border-b-[#616161]'
              placeholder='Find'
            />
            <IconElement className='text-[#616161] w-5 h-5 absolute ml-2' icon={SearchIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
