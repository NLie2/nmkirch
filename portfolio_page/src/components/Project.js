export default function Project( { projectName, deploymentLink}){
  return(
    <div className="project-box">
      <h3> {projectName} </h3>
      <h4> {deploymentLink} </h4>
    </div>
  )
}