import React from 'react'

function DetailList({listTitle,listSubTitle,className}) {
  return (
    <ol className="detail-list">
        <li className="detail-list__item">
            <p className='detail-list__item--title'>{listTitle}</p>
        </li>
        <li className="detail-list__item">
            <p className={`detail-list__item--sub-title ${className ? className : ''}`}>{listSubTitle}</p>
        </li>
    </ol>
  )
}

export default DetailList