import React from 'react'
import PowerPointImg from './res/powerpointLogo.svg'

const OSnote = ({ lesson, link, absent }) => {
  return (
    <div className="downloadBlock">
      <div className="titleAndLogo">
        <img className="powerplogo" src={PowerPointImg} />
        <div>{`урок ${lesson}`}</div>
      </div>
      <div className="absent">
        <div>{absent === true ? "файл отсутствует" : ""}</div>
        <a className="downloadLink" href={link || "#"}>{absent === false ? <button className="downloadBtn">download</button> : ""}</a>
      </div>
    </div>
  )
}

export default OSnote