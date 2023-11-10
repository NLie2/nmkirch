import { Link } from 'react-router-dom'


export default function NavBar(){
  return(
    <div className='nav'>
      <li>
        <Link to='/'> Home </Link>
      </li>
      <li>
        <Link to='/cv'> CV </Link>
      </li>
      <li>
        <Link to='/academicachivementsandpublications'> Academic Achievements and Publications </Link>
      </li>
      <li>
        <Link to='/poetryandstuffIlike'> Poetry and Stuff I Like </Link>
      </li>
    </div>
  )
}