import React from 'react'

function ProjectCard({src }) {
  return (
    <a href="https://github.com/Aspen-Ishii/checklist" target="_blank">
                <img className='hover' src={src} alt="Viberr logo" />
                <h3>Viberr</h3>
                <p>Streaming App</p>
            </a>
  )
}

export default ProjectCard