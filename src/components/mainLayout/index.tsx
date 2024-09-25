import { FC, PropsWithChildren } from 'react'
import MobileMainLayout from './mobileMainLayout'
import DesktopMainLayout from './desktopMainLayout'
import useDevice from '@/hooks/useDevice'

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
