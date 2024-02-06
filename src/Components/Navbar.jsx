import {useState} from 'react'
import './Navbar.css'

export default function Navbar() {

  const [active, setActive] = useState('navBar')
  // Function to toggle navbar.....
  
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // Function to remove navbar.....
  
  const removeNav =()=>{
    setActive('navBar')
  }
  return (
    <>
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="/" className="logo flex"> 
        <h1 id='portfoilo'>D@shboard</h1>
          </a>
        </div>


        <div className={active}>
          <div className="navLists flex">
        <div className="navItem">
          <a style={{color:'blue'}} href="/" className="navlink">Home</a>  
        </div>

        <div className="navItem">
          <a style={{color:'blue'}} href="/" className="navlink">About</a>  
        </div>

        <div className="navItem">
          <a style={{color:'blue'}} href="/Skills" className="navlink">Offices</a>  
        </div>

        <div className="navItem">
          <a style={{color:'blue'}} href="/Projects" className="navlink">Projects</a>  
        </div>

        <div className="navItem">
          <a style={{color:'blue'}} href="/Exprience" className="navlink">Exprience</a>  
        </div>

        <div className="navItem">
          <a id='loginbtn' href="/Exprience" className="navlink">Login</a>  
        </div>
        
          </div>
          <div onClick={removeNav} className="colseNavbar">
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
        </div>
      </header>
    </section>

    </>
  )
}
