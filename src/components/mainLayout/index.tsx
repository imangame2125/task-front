import { FC, PropsWithChildren } from 'react'
import DesktopMainLayout from './desktopMainLayout'
import useDevice from '@/hooks/useDevice'
import MobileMainLayout from './mobileMainLayout'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isTabletOrMobile } = useDevice()
  return (
    <>
      {isTabletOrMobile && <MobileMainLayout>{children}</MobileMainLayout>}
      {!isTabletOrMobile && <DesktopMainLayout>{children}</DesktopMainLayout>}
    </>
  )
}

export default MainLayout
