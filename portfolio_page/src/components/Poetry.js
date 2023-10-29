

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Poetry( { titlesAndLinks }){
  console.log(titlesAndLinks)
  
  const [isDivVisible, setDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setDivVisible(!isDivVisible);
  }

  return(
    <div className="poetry">
      <ul>
      {titlesAndLinks && titlesAndLinks.map( titleAndLink => {
        return(
            <li>
              { titleAndLink['link'] ? <Link to= {titleAndLink['link']}>{titleAndLink['title']}</Link> :  <p onClick={toggleDivVisibility}> {titleAndLink['title']} </p>}

              <p>{ isDivVisible && <div className="poem"> {titleAndLink['poem']}</div> }</p>

            </li>
        )
      })} </ul>
    </div>
  )
}