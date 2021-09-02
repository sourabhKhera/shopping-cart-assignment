import React, { memo } from 'react'
import { Carousel } from 'react-responsive-carousel'
import './style.scss'

const CarouselComp = ({ offers, showStatus, showThumbs }) => {
  const renderOffers =
    offers && offers.length
      ? offers.map((item, idx) => {
          return (
            <div key={idx}>
              <img
                src={item.bannerImageUrl}
                alt={item.bannerImageAlt}
                height="300px"
                className="banner-image"
              />
            </div>
          )
        })
      : []
  return renderOffers?.length ? (
    <Carousel showThumbs={showStatus} showStatus={showThumbs}>
      {renderOffers}
    </Carousel>
  ) : (
    []
  )
}

CarouselComp.defaultProps = {
  showThumbs: false,
  showStatus: false,
}

export default memo(CarouselComp)
