import React from 'react'
interface Props {
    children: React.ReactNode;
    props?: any;
}

function ProjectCard({ children, ...props }: Props) {
  return (
    <div className="bg-white p-4 shadow-md" {...props} >{children}</div>
  )
}

export default ProjectCard