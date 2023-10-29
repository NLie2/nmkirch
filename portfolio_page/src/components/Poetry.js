import { Link } from "react-router-dom"

export default function Poetry( { titlesAndLinks }){
  console.log(titlesAndLinks)
  return(
    <div className="poetry">
      <ul>
      {titlesAndLinks && titlesAndLinks.map( titleAndLink => {
        return(
            <li>
              <Link to={titleAndLink['link']}> {titleAndLink['title']}</Link>
            </li>
        )
      })} </ul>
    </div>
  )
}