export default function Project( { projectName, deploymentLink}){
  return(
    <div className="project-box">
      <h3> {projectName} </h3>
      <p> <a href={deploymentLink}>Check it out</a></p>
    </div>
  )
}