import { Link } from 'react-router-dom'

import Poetry from './Poetry'


export default function Personal(){
  return(
    <div className="personal middle"> 
        <h1> Poetry and Stuff I like </h1>

        <h2> Poetry </h2>
        <h3> ... I wrote </h3>
        <Poetry 
          titlesAndLinks= { [ 
            {title: "soap bubble vacuum cleaner", poem: `
            Raven, raven by the pond<br>
            Come to sit where I belong<br>
            Call me princess, guard your queen<br>
            Visit me by the window seem<br><br>
            
            Tell me tales of other ravens<br>
            And how you've seen and roamed the heavens<br>
            Tell me I could climb a tree<br>
            Fairytales that tell of me<br><br>
            
            Lead me to a closed off garden<br>
            Hide me in your feathered garments<br>
            Let me tell you of a time<br>
            When my red hair wasn't mine!<br><br>
            
            Raven raven i can't see you<br>
            Im a mute swan you're an eagle<br>
            Like to hunt for my own fish<br>
            But you may dream my secret wish<br>
            `}, 
            {title: "wealthy raven", link: ""}, 
            {title: "family vacation", link: ""}, 
            {title: "de munt", link: ""}
          ]}
        />
        <h3> ... I would read if I were you </h3>
        
        <Poetry 
          titlesAndLinks= { [ 
            {title: "Wear Sunscreen by Mary Schmich", link: "https://www.chicagotribune.com/columns/chi-schmich-sunscreen-column-column.html"},
            {title: "For M by Mikko Harvey", link: "https://www.foundryjournal.com/harvey.html"}
          ]}
        />

        <h2> Books that changed me </h2>
        <ul>
          <li> <Link to="https://www.goodreads.com/en/book/show/123471">I am a Strange Loup by Douglas Hofstadter</Link></li>
          <li> <Link to="https://www.goodreads.com/book/show/10225972-briefe-an-einen-jungen-dichter"> Letters to a Young Poet by Rainer Maria Rilke</Link></li>
          <li> <Link to="https://www.goodreads.com/book/show/91950.The_Myth_of_Sisyphus"> The Myth of Sysiphus by Albert Camus </Link></li>
        </ul>

        <h2> Podcasts I enjoy listening to </h2>
        <ul>
          <li> <Link to=""> Hardcore History by Dan Carlin</Link></li>
          <li> <Link to=""> Making Sense by Sam Harris </Link></li>
          <li> <Link to=""> The Myth of Sysiphus by Albert Camus </Link></li>
        </ul>

        <h2> Artists I like  </h2>
        <ul>
          <li> <Link to=""> Bob Dylan </Link></li>
          <li> <Link to=""> Cage The Elephant </Link></li>
        </ul>
    </div>
  )
}