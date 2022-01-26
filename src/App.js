import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './pages/Homepage'

import Ahmed from './pages/Profile'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
     
      <Router>
      <Header />
      <main>
        <Container>
          <Routes>
          <Route path='/' element={<Homescreen />}  />
         
          
          <Route path='/ahmed' element={<Ahmed/> } />
          </Routes>
        </Container>
      </main>
      <Footer />
      </Router>
    </div>
  );
}
export default App;
