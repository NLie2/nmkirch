export default function Project( { projectName, deploymentLink, description}){
  return(
    <div className="project-box">
      <h3> {projectName} </h3>
      <p> {description} </p>
      <p> <a href={deploymentLink}>Check it out</a></p>
    </div>
  )
}