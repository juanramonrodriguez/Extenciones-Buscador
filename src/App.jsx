
import Navbar from "./components/navbar/navbar";
import Layout from "./components/Layout/layout";
import Cards from './components/cards/cards';
import {useState, } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { darktheme, lightTheme } from './components/dark-mode/theme-style';
import { ThemeProvider, useThemeContext } from './components/dark-mode/theme-context';
import GlobalStyle from './global-style';

function AppContext() {
  const {isDark} = useThemeContext();
  const theme = isDark ? darktheme: lightTheme;
  
  const [filterActive, setFilterActive] = useState("all")
  return(
    <>
    <StyledProvider theme={theme}>
      <GlobalStyle/>
      <Layout>
      <Navbar setFilterActive={setFilterActive}/>
      <Cards filterActive={filterActive}/>
      </Layout>
    </StyledProvider>
    
    </>
    
  

  )
}

 function App(){
  return(
    <ThemeProvider>
      <AppContext/>
    </ThemeProvider>
  )
}
 export default App;