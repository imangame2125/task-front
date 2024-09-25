import { ArrowDown2, ArrowRight2 } from 'iconsax-react'
import IconElement from '../iconElement/IconElement'

interface AnchorProps {
  onClick: () => void
  exapnded?: boolean
}

const Anchor = ({ exapnded, ...rest }: AnchorProps) => {
  return (
    <IconElement
      icon={exapnded ? ArrowDown2 : ArrowRight2}
      className='text-[#424242] cursor-pointer w-3'
      {...rest}
    />
  )
}

export default Anchor
