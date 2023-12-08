import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Abaut from "./pages/abaut";

export default function App() {
  
  return <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="Profile" element={<Profile />}/>
      <Route path="Abaut" element={<Abaut />}/>
      <Route path="Sign-In" element={<SignIn />}/>
      <Route path="Sign-Up" element={<SignUp />}/>
  </Routes>
  </BrowserRouter>

  
}
