import { Link } from 'react-router-dom'

import Poetry from './Poetry'
import { poems } from '../assets/poems'; // Adjust the path as needed

export default function Personal() {
  return (
    <div className="personal middle"> 
      <h1>Poetry and Stuff I Like</h1>
      <div className="grid-container">

        {/* Podcasts Section */}
        <div className="grid-item">
          <h2>Podcasts I enjoy listening to</h2>
          <ul>
            <li><Link to="">Hardcore History by Dan Carlin</Link></li>
            <li><Link to="">Making Sense by Sam Harris</Link></li>
          </ul>
        </div>

        {/* Artists Section */}
        <div className="grid-item">
          <h2>Artists I like</h2>
          <ul>
            <li>Bob Dylan</li>
            <li>Cage The Elephant</li>
          </ul>
        </div>
        
        {/* Poetry Section */}
        <div className="grid-item">
          <h2>Poetry</h2>
          <h3>... I wrote</h3>
          <Poetry titlesAndLinks={poems} />

          <h3>... I would read if I were you</h3>
          <Poetry 
            titlesAndLinks={[
              { title: "Wear Sunscreen by Mary Schmich", link: "https://www.chicagotribune.com/columns/chi-schmich-sunscreen-column-column.html" },
              { title: "For M by Mikko Harvey", link: "https://www.foundryjournal.com/harvey.html" }
            ]}
          />
        </div>

        {/* Books Section */}
        <div className="grid-item">
          <h2>Books that changed me</h2>
          <ul>
            <li><Link to="https://www.goodreads.com/en/book/show/123471">I Am a Strange Loop by Douglas Hofstadter</Link></li>
            <li><Link to="https://www.goodreads.com/book/show/10225972-briefe-an-einen-jungen-dichter">Letters to a Young Poet by Rainer Maria Rilke</Link></li>
            <li><Link to="https://www.goodreads.com/book/show/91950.The_Myth_of_Sisyphus">The Myth of Sisyphus by Albert Camus</Link></li>
          </ul>
        </div>

        
      </div>
    </div>
  );
}