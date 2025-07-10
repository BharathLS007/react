import React from 'react'
import Take from './Take'
function What({outputvalue,deltodo,}) {
  return (
      <div className="ctrl">
           {
            outputvalue.map((opt,index)=>{
              return(
                <Take opt={opt} index={index} deltodo={deltodo}/>
              )
            })
           }
      </div>
  )
}

export default What
