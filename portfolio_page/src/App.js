
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import CV from './components/CV'
import Academic from './components/Academic'
import Personal from './components/Personal'


function App() {
  return (
    <BrowserRouter>
        
        <NavBar />
        <Routes>
          <Route path='/home' element={<Landing />} />
          <Route path='/cv' element={<CV />} />
          <Route path='/academicachivementsandpublications' element={<Academic/>}></Route>
          <Route path='/poetryandstuffIlike' element={<Personal />}></Route>

        </Routes>
  
        

    </BrowserRouter>

  )
}

export default App;
