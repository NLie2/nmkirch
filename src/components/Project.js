export default function Project({ projectName, deploymentLink, authors, description }) {
  return (
    <div className="project-box">
      <h3>
        <a href={deploymentLink} target="_blank" rel="noopener noreferrer">{projectName}</a>
      </h3>
      {authors?  <h5>
        <a href={deploymentLink} target="_blank" rel="noopener noreferrer">{authors}</a>
        </h5> 
        : null}
      <p>{description}</p>
    </div>
  );
}
