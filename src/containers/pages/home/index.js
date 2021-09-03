import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../../components/carausel'
import { getOfferBanners } from '../../../actions/async-actions/home-async'
import Button from '../../../components/button'

import classes from './style.m.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  const banners = useSelector((state) => state.homeReducer.banners)
  const categories = useSelector((state) => state.homeReducer.categories)
  useEffect(() => {
    dispatch(getOfferBanners())
  }, [])
  const renderImageSection = (data) => {
    return (
      <section
        className={classes['main__categories-section__div__section-left']}
      >
        <img
          src={data.imageUrl}
          alt={data.name}
          height="200px"
          className={
            classes['main__categories-section__div__section-left__img']
          }
        />
      </section>
    )
  }
  const renderDescriptionSection = (data) => {
    return (
      <section
        className={classes['main__categories-section__div__section-right']}
      >
        <div
          className={
            classes['main__categories-section__div__section-right__div-elem1']
          }
        >
          {data.name}
        </div>
        <div
          className={
            classes['main__categories-section__div__section-right__div-elem2']
          }
        >
          {data.description}
        </div>
        <Button
          btnText={`Explore ${data.key}`}
          // buttonStyle={{ width: '100%', marginBottom: '15px' }}
        />
      </section>
    )
  }
  const renderCategories = categories?.length
    ? categories.map((item, idx) => {
        return (
          <div className={classes['main__categories-section__div']} key={idx}>
            {(idx + 1) % 2 === 0 ? (
              <Fragment>
                {renderDescriptionSection(item)}
                {renderImageSection(item)}
              </Fragment>
            ) : (
              <Fragment>
                {renderImageSection(item)}
                {renderDescriptionSection(item)}
              </Fragment>
            )}
          </div>
        )
      })
    : []
  return (
    <main className={classes['main']}>
      <section className={classes['main__section-elem1']}>
        <Carousel offers={banners} />
      </section>
      <section className={classes['main__section-elem2']}>
        {renderCategories}
      </section>
    </main>
  )
}

export default HomePage
