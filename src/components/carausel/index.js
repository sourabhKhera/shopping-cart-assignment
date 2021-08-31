import React from 'react'
import { Carousel } from 'react-responsive-carousel'
// import './style.scss'

const CarouselComp = ({ offers }) => {
  console.log(offers, 'offers')
  const renderOffers =
    offers && offers.length
      ? offers.map((item, idx) => {
          return (
            <div key={idx}>
              <img
                src={item.bannerImageUrl}
                alt={item.bannerImageAlt}
                width="400px"
              />
            </div>
          )
        })
      : []
  return <Carousel>{renderOffers}</Carousel>
}

export default CarouselComp
