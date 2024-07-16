import './App.css'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/router'
import { UserProvider } from './contexts/UserContext'
import { Link } from 'react-router-dom'
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <>
          <header className="bg-green-500 h-10 w-screen fixed flex items-center top-0 z-10">
            <Link to="/">
              <p className='text-xl font-bold ml-6'>Hira E-Commerce</p>
            </Link>
          </header>
          <Nav />
          <Router />
          <Footer />
        </>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
