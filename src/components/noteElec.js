import React from 'react'
import PowerPointImg from './res/powerpointLogo.svg'

const ElecNote = ({ lesson, link }) => {
  return (
    <div className="downloadBlock">
      <div className="titleAndLogo">
        <img className="powerPlogo" src={PowerPointImg} />
        <div>{`Электроника Урок ${lesson}`}</div>
      </div>
      <a className="downloadLink" href={link || "#"}><button className="downloadBtn">download</button></a>
    </div>
  )
}

export default ElecNote