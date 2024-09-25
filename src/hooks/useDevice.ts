import { useMediaQuery } from 'react-responsive'

const useDevice = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return {
    isTabletOrMobile,
    isDesktopOrLaptop,
    isBigScreen,
    isPortrait,
    isRetina,
  }
}

export default useDevice
