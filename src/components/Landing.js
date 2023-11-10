import About from './About'
import Projects from './Projects'
import ContactInfo from './ContactInfo'

export default function Landing(){
  return(
    <div className="landing middle">
      <div class="top-section">
        <ContactInfo />
        <About />
      </div>

      <Projects /> 

    </div>
  )
}