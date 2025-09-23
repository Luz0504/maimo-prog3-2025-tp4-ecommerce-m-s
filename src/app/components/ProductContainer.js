'use client'

import React from 'react'

import { useState, useCallback, useEffect } from 'react'

const ProductContainer = ({id}) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

  return (
    <div>
        <h1>TEST</h1>
    </div>
  )
}

export default ProductContainer