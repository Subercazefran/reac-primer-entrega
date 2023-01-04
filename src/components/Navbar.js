import styled from "styled-components"


const Navbar = () => {
  return (
    <>
        <NavContenedor>
            <h2>Donuts <span> world </span></h2>
            <div className="links active">
              <a href="">Home</a>
              <a href="">Menu</a>
              <a href="">Nosotros</a>
              <a href="">Contacto </a>
              <a href="">Redes</a>
            </div>
        </NavContenedor>
    </>
  )
}

export default Navbar


const NavContenedor = styled.nav`
h2{
  color: white;
  font-weight: 400;
  span{
    font-weight: bold;
  }
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: white;
  text-decoration: none;
  margin-right: 1rem;
}

`