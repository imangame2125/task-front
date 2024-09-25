import { FC } from 'react'
import IconElement from '../iconElement/IconElement'
import { More } from 'iconsax-react'

interface CardProps {
  title: string
  description: string
  timePeriods: {
    period1: string
    period2: string
    period3: string
  }
  imageUrl: string
  label1: string
  label2: string
}

const Card: FC<CardProps> = ({ title, description, timePeriods, imageUrl, label1, label2 }) => {
  return (
    <div className='w-72 h-fit mx-4 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <p className='text-sm font-bold text-[#242424]'>{title}</p>
          <IconElement icon={More} className='text-[#424242]' />
        </div>
        <p className='text-gray-700 text-sm mt-1'>{description}</p>
        <div className='flex space-x-4 mt-2'>
          <p className='text-[#242424] border-b-2 border-[#5B5FC7]'>{timePeriods.period1}</p>
          <p className='text-gray-500 text-xs'>{timePeriods.period2}</p>
          <p className='text-gray-500 text-xs'>{timePeriods.period3}</p>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
          <img src={imageUrl} alt="" />
        </div>
        <div className='flex items-center space-x-2 mt-3 justify-center'>
          <span className='bg-[#00B7C3] text-blue-800 text-xs font-medium w-2.5 h-2.5 '>
          </span>
         <p className='text-xs text-[#424242]'>{label1}</p>
          <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>
          </span>
            <p className='text-xs text-[#424242]'>{label2}</p>
        </div>
      </div>
        <button className='text-blue-600 flex  font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
          View Details
        </button>
    </div>
  )
}

export default Card
