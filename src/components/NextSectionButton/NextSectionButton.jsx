import React from 'react'

function NextSectionButton({position, sectionName, sectionId}) {
  return (
    <a href={`#${sectionId}`} style={{[position]: '8px'}}>
        {sectionName}
    </a>
  )
}

export default NextSectionButton;