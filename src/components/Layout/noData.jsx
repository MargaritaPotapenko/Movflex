import React from 'react'
import empty from '../../dist/img/empty.svg'
import '../../dist/css/no-data.css'

const NoData = () => {
    return (
        <div className="empty-movie">
        <img src={empty} alt="Empty movie" />
        <h3 className="title">No results Found!</h3>
      </div>
      )
}

export default NoData