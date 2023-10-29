import { Link } from 'react-router-dom'

import Poetry from './Poetry'


export default function Personal(){
  return(
    <div className="personal"> 
        <h1> Poetry and Stuff I like </h1>

        <h2> Poetry </h2>
        <h3> ... I wrote </h3>
        <Poetry 
          titlesAndLinks= { [ 
            {title: "soap bubble vacuum cleaner", link: ""}, 
            {title: "wealthy raven", link: ""}, 
            {title: "family vacation", link: ""}, 
            {title: "de munt", link: ""}
          ]}
        />
        <h3> ... I would read if I were you </h3>
        <Poetry 
          titlesAndLinks= { [ 
            {title: "Wear Sunscreen by Mary Schmich", link: ""},
            {title: "For M by Mikko Harvey", link: "https://www.foundryjournal.com/harvey.html"}
          ]}
        />

        <h2> Books that changed me </h2>
        <ul>
          <li> <Link to="">I am a Strange Loup by Douglas Hofstadter</Link></li>
          <li> <Link to="https://www.goodreads.com/book/show/10225972-briefe-an-einen-jungen-dichter"> Letters to a Young Poet by Rainer Maria Rilke</Link></li>
          <li> <Link to=""> The Myth of Sysiphus by Albert Camus </Link></li>
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