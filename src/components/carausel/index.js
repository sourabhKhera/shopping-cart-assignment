import React, { memo } from 'react'
import { Carousel } from 'react-responsive-carousel'
import './style.scss'

const CarouselComp = ({ offers }) => {
  const renderOffers =
    offers && offers.length
      ? offers.map((item, idx) => {
          return (
            <div key={idx}>
              <img
                src={item.bannerImageUrl}
                alt={item.bannerImageAlt}
                height="300px"
              />
            </div>
          )
        })
      : []
  return renderOffers?.length ? (
    <Carousel showThumbs={false} showStatus={false}>
      {renderOffers}
    </Carousel>
  ) : (
    []
  )
}

export default memo(CarouselComp)
