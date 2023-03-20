import React from 'react'
import { Helmet } from 'react-helmet-async'

function Head({title}) {
  return (
    <Helmet>
        <title>Proactivo - {title}</title>
    </Helmet>
  )
}

export default Head