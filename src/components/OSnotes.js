import React from 'react'
import OSnote from './OSnote'
import { links } from './OSLinks';

const OSnotes = () => {
  const n = links.length;
  return (
          [...Array(n)].map((e, id) =>               
                  <OSnote lesson={id + 1} link={links[id]} absent={links[id] == "" ? true : false} />
        )     
  )
}

export default OSnotes