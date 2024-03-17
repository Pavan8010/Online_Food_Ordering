import { ThemeProvider } from '@emotion/react';
import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
// import NavBar from './components/Navbar/NavBar';
// import Home from './components/Home/Home';
// import RestaurantDetails from './components/Restaurant/RestaurantDetails';
// import Cart from './components/Cart/Cart';
// import Profile from './components/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { getUser } from './components/State/Authentication/Action';
import { useDispatch, useSelector } from 'react-redux';

function App(){
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const {auth} = useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        {/* <NavBar/> */}
        {/* <Home/> */}
        {/* <RestaurantDetails/> */}
        {/* <Cart/> */}
        {/* <Profile/> */}
        <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
