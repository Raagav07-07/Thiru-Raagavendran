import React from 'react'

function ProjectContainer({src,link,h3,p}) {
  return (
    <><a href={link}><img src={src} alt={src}></img>
    <h3>{h3}</h3>
    <p>{p}</p></a>
    </>
  )
}

export default ProjectContainer
