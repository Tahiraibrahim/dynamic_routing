"use client"

import React from 'react'

const Accessories = ({params} : {params: {accessori:string}}) => {
  console.log(params);
  
  return (
    <div className="accessory-details-container">
        <h1>Accessories Details</h1>
        <h3> Name : {params.accessori}</h3>
    </div>
  )
}

export default Accessories