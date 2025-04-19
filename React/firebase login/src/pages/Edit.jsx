import React from 'react'
import { useLocation } from 'react-router'

export const Edit = () => {

  const location  = useLocation()
  console.log(location)

  return (
    <div>Edit</div>
  )
}
