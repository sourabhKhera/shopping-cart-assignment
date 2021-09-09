export const isTablet = () => {
  const mediaTabletQuery = window.matchMedia(
    '(min-width: 481px) and (max-width: 768px)'
  )
  return mediaTabletQuery.matches
}

export const isMobile = () => {
  const mediaMobileQuery = window.matchMedia('(max-width: 480px)')
  return mediaMobileQuery.matches
}
