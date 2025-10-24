'use client'

import { useState, useEffect } from "react";
import SimpleSlider from './SimpleSlider'

const Banner = () => {

  const [loading, setLoading] = useState(true)

  const getSlider = async () => {
    try {
      setLoading(true)
      const response = <SimpleSlider />
      setLoading(false)
    } catch (error) {

    }
  }

  useEffect (() => {
    getSlider()
  }, [getSlider])

  return (
    <div className='w-220 rounded-3xl overflow-clip border-3 border-black mb-10'>
        {loading ? ('Loading...') : (<SimpleSlider />)}
    </div>
  )
}

export default Banner