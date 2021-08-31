import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/carausel'
import { getOfferBanners } from '../../actions/async-actions/home-async'
import '!style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.min.css'
// import classes from './style.scss'
import './style.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  const banners = useSelector((state) => state.homeReducer.banners)
  useEffect(() => {
    dispatch(getOfferBanners())
  }, [])
  return (
    <main className={'main'}>
      <Carousel offers={banners} />
    </main>
  )
}

export default HomePage
