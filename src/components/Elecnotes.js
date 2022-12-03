import React from 'react'
import { ElecLinks } from './ELECLinks'
import ElecNote from './noteElec'

const Elecnotes = () => {
  const n = ElecLinks.length;
  return (
          [...Array(n)].map((e, id) =>                  
                  <ElecNote lesson={id + 1} link={ElecLinks[id]} />
          )     
  )
}

export default Elecnotes