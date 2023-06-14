import './App.css';
import Dashboard from './components/Feeds';
import Navbar from './components/Navabar/Navbar';
import { AuthContext } from './components/Provider/ThemeProvider';
import { useContext, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import Casestudies from './components/Pages/Casestudies';
import AllRoutes from './components/AllRoutes/AllRoutes';

function App() {
  const { isAuth,loading,elem } = useContext(AuthContext)
  useEffect(()=>{

  },[isAuth,elem])
  if (loading) {
		return <Spinner color='red.500' />
	}
  return (
    <div className="App">
      <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
