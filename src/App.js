
import './App.css';
import Card from './components/cards/Card';
import {Route,Routes} from "react-router-dom";
import { Aboutus } from './components/aboutus';

import { Cart } from './components/addToCart/Cart';
import { Header } from './components/header';
import Signin from './components/signin';
import { Signout } from './components/signout';
import SignInRoute from './routes/SignInRoute';
import ProtectedRoute from './protectedRoutes/protectedRoute';
import SignOutRoutes from './routes/SignOutRoutes';


function App() {
  return (
    <div>
    <Header />
    {/* <Card /> */}
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/Cart" element={
      <ProtectedRoute>

        <Cart />

      </ProtectedRoute>
      
      } />

      <Route path="/signin" element={
        <SignInRoute>

          <Signin/>

        </SignInRoute>
      } />
      <Route path="/signout" element={
       <SignOutRoutes>
         <Signout/>

       </SignOutRoutes>

      } />
    </Routes>
  </div>
  );
}

export default App;
