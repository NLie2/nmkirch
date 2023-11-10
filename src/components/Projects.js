import Project from './Project'

export default function Projects( ){

  const projects = [ 
    { title:"stock portfolio analyzer", deployment_link: "https://stock-portfolio-analyzer-cc275ea5067c.herokuapp.com/"}, 
    { title:"stock portfolio analyzersei quizz app", deployment_link: "https://quizzapp-88d607683c8a.herokuapp.com/"}, 
    { title:"Can I wear short pants today", deployment_link: "https://caniwearshortpants.netlify.app/"}, 
    { title:"Tetris game", deployment_link: "https://nlie2.github.io/Tetris/"}, 
]

  return(
    <div className="projects">
      {
        projects.map( project => {
          return <Project 
            projectName = {project.title}
            deploymentLink = {project.deployment_link}
          />
        })
      }
    </div>
  )
}