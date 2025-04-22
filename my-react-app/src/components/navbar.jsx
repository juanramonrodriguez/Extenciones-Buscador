import React from 'react'
import Logo from "../assets/images/logo.svg"
import Moon from "../assets/images/icon-moon.svg"
import Sun from "../assets/images/icon-sun.svg"
import { ContainerLogo, ContainerModo, ContainerNavbar, SunModo, MoonModo, ContainerTitle, Title, ContainerFilter } from './navbar-styled'



const Navbar = () => {
  return (
    <>
    <ContainerNavbar>
      <ContainerLogo>
        <img src={Logo} alt="" />
      </ContainerLogo>
      <ContainerModo>
        <SunModo>
        <img  src={Sun} alt="" />
        </SunModo>
        <MoonModo>
        <img  src={Moon} alt="" />
        </MoonModo>
      </ContainerModo>
    </ContainerNavbar>  
      <ContainerTitle>
        <Title>
          <h2>Extensions List</h2>
        </Title>
        <ContainerFilter>
          <button className='isactive'>All</button>
          <button>Active</button>
          <button>Inactive</button>
        </ContainerFilter>
      </ContainerTitle>
    </>
  )
}

export default Navbar    