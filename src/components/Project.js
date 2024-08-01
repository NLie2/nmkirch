export default function Project({ projectName, deploymentLink, description }) {
  return (
    <div className="project-box">
      <h3>
        <a href={deploymentLink} target="_blank" rel="noopener noreferrer">{projectName}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
}
