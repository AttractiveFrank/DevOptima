import './index.css'
import Footer from './layout/Footer/Footer.jsx'
import Header from './layout/Header/Header.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import DevOptima from './pages/DevOptima/DevOptima.jsx'
import Home from './pages/Home/Home.jsx'
import Solution from './pages/Solution/Solution.jsx'
import User from './pages/User/User.jsx'

function App() {

  return (
    <>
      <div className='max-w-screen-2xl mx-auto  pl-5 pr-5'>
        <Header />
        <Home />
        <DevOptima />
        <Solution />
        <User />
        <ContactUs />
      </div>
      <Footer />
    </>
  )
}

export default App
