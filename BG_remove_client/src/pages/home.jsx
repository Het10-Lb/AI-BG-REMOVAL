import React from 'react'
import Hero from '../components/Hero.jsx'
import Steps from '../components/Steps.jsx'
import BGSlider from '../components/BGSlider.jsx'
import Footer from '../components/Footer.jsx'
import TryNow from '../components/TryNow.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Steps />
      <BGSlider />
      <TryNow/>
    </div>
  )
}

export default Home