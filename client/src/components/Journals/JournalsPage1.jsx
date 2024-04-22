import React from 'react'
import TopBooks from './TopBooks'
import FeaturedBooks from './FeaturedBooks'
import Footer from '../partials/Footer'

const JournalsPage = () => {
  return (
    <div style={{maxWidth:'99vw'}}>
      <FeaturedBooks />
      <TopBooks />
      {/* <Footer /> */}
    </div>
  )
}

export default JournalsPage
