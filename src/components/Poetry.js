

// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Poetry( { titlesAndLinks }){
  console.log(titlesAndLinks)
  
  // const [isDivVisible, setDivVisible] = useState(false);

  const toggleDivVisibility = (poemDivName, e) => {
    // setDivVisible(!isDivVisible);
    console.log(poemDivName)
    const poemDiv = document.getElementById(poemDivName)
    poemDiv.hidden ? poemDiv.hidden = false : poemDiv.hidden = true
  }
  return(
    <div className="poetry">
      <ul>
      {titlesAndLinks && titlesAndLinks.map( (titleAndLink, idx) => {
        const poemDivName = `poem${idx}`
        return(
            <li>
              { titleAndLink['link'] ? <Link to= {titleAndLink['link']}>{titleAndLink['title']}</Link> :  <p onClick={(e) => toggleDivVisibility(poemDivName, e)}> {titleAndLink['title']} </p>}

              {/* <div>{ isDivVisible && <pre className="poem"> {titleAndLink['poem']} </pre> }</div> */}
              <div > <pre hidden className='poem' id={poemDivName} > {titleAndLink['poem']} </pre> </div>

            </li>
        )
      })} </ul>
    </div>
  )
}