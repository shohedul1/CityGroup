import React from 'react'
import SliderPage from './components/SliderPage/SliderPage'
import KnowPage from './components/Know-us/KnowPage'
import Excellence from './components/Excellence/Excellence'
import OurBrands from './components/Our-Brands/OurBrands'
import Prestigious from './components/Prestigious/Prestigious'
import NewsandEvents from './components/NewsandEvents/NewsandEvents'

const Home = () => {
  return (
    <div>
      <SliderPage />
      <KnowPage/>
      <Excellence/>
      <OurBrands/>
      <Prestigious/>
      <NewsandEvents/>

    </div>
  )
}

export default Home