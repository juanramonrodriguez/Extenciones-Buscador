
import { ContainerLogo, ContainerModo, ContainerNavbar, ContainerTitle, Title, ContainerFilter } from './navbar-styled'
import logo from "../../../public/assets/images/logo.svg"
import darkLogo from "../../../public/assets/images/logo-dark.svg"
import sun from "../../../public/assets/images/icon-sun.svg"
import moon from "../../../public/assets/images/icon-moon.svg"
import { useThemeContext } from '../dark-mode/theme-context'



const Navbar = ({setFilterActive}) => {
  const {toggleTheme, isDark}= useThemeContext()
  return (
    <>
    <ContainerNavbar>
      <ContainerLogo>
      {isDark ? <img src={darkLogo}/>: <img src={logo}/>}
      </ContainerLogo>
      <ContainerModo>
        
          <button  className='mode'
          onClick={toggleTheme}>
            {isDark ? <img className='sun'  src={sun} alt="sun" />: <img className='moon' src={moon} alt="moon" />}
            
          </button>
       
      </ContainerModo>
    </ContainerNavbar>  
      <ContainerTitle>
        <Title>
          <h2>Extensions List</h2>
        </Title>
        <ContainerFilter>
          <button onClick={()=>setFilterActive("all")} className='isactive'>All</button>
          <button onClick={()=>setFilterActive(true)}>Active</button>
          <button onClick={()=>setFilterActive(false)}>Inactive</button>
        </ContainerFilter>
      </ContainerTitle>
    </>
  )
}

export default Navbar    