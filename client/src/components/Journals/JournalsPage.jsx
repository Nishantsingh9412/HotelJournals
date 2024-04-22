import React, { useEffect } from 'react'
import TopBooks from './TopBooks'
import FeaturedBooks from './FeaturedBooks'

const JournalsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <FeaturedBooks />
      <TopBooks />
    </>
  )
}

export default JournalsPage
