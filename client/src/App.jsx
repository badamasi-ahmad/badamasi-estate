import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';

export default function App() {
  
  return( 
  <BrowserRouter>
  <Header/>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/SignIn" element={<SignIn />}/>
      <Route path="/SignUp" element={<SignUp />}/>
      <Route path="/Search" element={<Search />}/>
      <Route path="/listing/:listingId" element={<Listing/>}/>
      
      <Route element={<PrivateRoute />}>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/create-listing" element={<CreateListing />}/>
        <Route path="/update-listing/:listingId" element={<UpdateListing />}/>
      </Route>
  </Routes>
  </BrowserRouter>

  );
}
// ₦
