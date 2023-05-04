import styled from 'styled-components'
import {Link} from 'react-router-dom'
import img from '../images/Vector.svg'

const Navbar = () => {
    return (
        <Nav>
       
         <nav className="navbar navbar-expand-lg bg-none">
  <div className="container">
  {/* <a className="navbar-brand" href="#">Cool Barber</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse w-100 navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex align-items-center justify-content-between  gap-1 w-100 m-auto mb-2 mb-lg-0">
            <li><img src={img} alt="img" /></li>
            <Link to="About" >About Us</Link>
            <Link to="our maters">Our masters</Link>
            <Link to="map">Map</Link>
            <Link to="header">Header</Link>
            <Link to="card-group">Card-Group</Link>
            <li>Portfolio</li>
            <Link to="testimionals">Testimonials</Link>
            <Link to="main">main</Link>
            <Link to="Team"></Link>
            <Link to="contact">Contact</Link>
            <Link to="components"></Link>
      </ul>
    </div>
  </div>
</nav>



        </Nav>
     
    )
}

const Nav = styled.div`


`
export default Navbar