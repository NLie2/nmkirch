
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import CV from './components/CV'
import Academic from './components/Academic'
import Personal from './components/Personal'



function App() {
  return (
    <BrowserRouter>
        
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/cv' element={<CV />} />
          <Route path='/academicachivementsandpublications' element={<Academic/>}></Route>
          <Route path='/poetryandstuffIlike' element={<Personal />}></Route>

        </Routes>
              

        <Footer />
        

    </BrowserRouter>

  )
}

export default App;
