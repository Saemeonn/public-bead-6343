import './App.css';
import Dashboard from './components/Feeds';
import Navbar from './components/Navabar/Navbar';
import { AuthContext } from './components/Provider/ThemeProvider';
import { useContext, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import Casestudies from './components/Pages/Casestudies';
import AllRoutes from './components/AllRoutes/AllRoutes';

function App() {
  const { isAuth,loading,elem,theme } = useContext(AuthContext)
  useEffect(()=>{

  },[isAuth,elem])
 
  return (
    <div className="App" style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black"}}>
      <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
