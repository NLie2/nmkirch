import Project from './Project'

export default function Projects(  ){
  return(
    <div className="projects">
        <Project
          projectName={'stock portfolio analyzer'}
        />
        <Project
          projectName={'weather app'}
        />
        <Project
          projectName={'sei quizz app'}
        />
        <Project
          projectName={'Tetris game'}
        />
    </div>
  )
}