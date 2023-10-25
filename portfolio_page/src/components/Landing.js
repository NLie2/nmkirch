import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import ContactInfo from './ContactInfo'

export default function Landing(){
  return(
    <div className="Landing">
      <h1> Hi, I'm Nathalie Maria </h1>
      <About />
      <Projects />
        
      <ContactInfo />

      <Footer />
    </div>
  )
}