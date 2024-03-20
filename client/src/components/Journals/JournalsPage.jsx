import React, { useEffect } from 'react'
import TopBooks from './TopBooks'
import FeaturedBooks from './FeaturedBooks'
import Footer from '../partials/Footer'

const JournalsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <FeaturedBooks />
      <TopBooks />
      <Footer />
    </>
  )
}

export default JournalsPage
