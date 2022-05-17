import React from 'react'
import "./Plan.css"

const Plan = () => {
  return (
    <div>
        <div className='container' >
            <input className='from' placeholder='From'/>
            <input className='to' placeholder='To'/>
            <input className='traveldate' type={Date} placeholder='Travel Date'/>
            <button type="submit">Search</button>
        </div>
    </div>
  )
}

export default Plan;