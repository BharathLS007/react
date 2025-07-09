import React from 'react'
import Take from './Take'
function What({outputvalue}) {
  return (
      <div className="ctrl">
           {
            outputvalue.map((opt)=>{
              return(
                <Take opt={opt} />
              )
            })
           }
      </div>
  )
}

export default What
