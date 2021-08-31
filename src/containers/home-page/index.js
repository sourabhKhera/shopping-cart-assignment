import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/carausel'
import { getOfferBanners, getCategories } from '../../actions/async-actions/home-async'
import classes from './style.m.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  const banners = useSelector((state) => state.homeReducer.banners)
  useEffect(() => {
    dispatch(getOfferBanners())
    dispatch(getCategories())
  }, [])
  return (
    <main className={classes['main']}>
      <div className={classes['main__div-elem1']}>
        <Carousel offers={banners} />
      </div>

    </main>
  )
}

export default HomePage
