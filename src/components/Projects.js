import Project from './Project'

export default function Projects( ){

  const projects = [ 
    { title:"stock portfolio analyzer", deployment_link: "https://stock-portfolio-analyzer-cc275ea5067c.herokuapp.com/", description: "A Full-Stack Web application that allows users to determine the Networth progression of their stock portfolio. The backend is written in Python/Django and the frontend in react"}, 
    { title:"stock portfolio analyzersei quizz app", deployment_link: "https://quizzapp-88d607683c8a.herokuapp.com/", description: "A web application using express and react, allowing students to share knowledge of a common course. I mostly worked on connecting front- and backend, and creating the API for this project."}, 
    { title:"Can I wear short pants today", deployment_link: "https://caniwearshortpants.netlify.app/", description: "A web application making use of a weather API, which tells user whether it is warm enough to wear short pants. It was a pair project and I focused mostly on the react components and API calls for this project."}, 
    { title:"Tetris game", deployment_link: "https://nlie2.github.io/Tetris/", description: "A solo project in which I built a game in plain JavaScript, deployed with Netlify."}, 
]

  return(
    <div className="projects">
      {
        projects.map( project => {
          return <Project 
            projectName = {project.title}
            deploymentLink = {project.deployment_link}
            description = {project.description}
          />
        })
      }
    </div>
  )
}