import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import Nosgateaux from './pages/nosgateaux';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/nos-gateaux' element={<Nosgateaux/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
