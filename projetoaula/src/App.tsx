import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Logo from "./components/Logo"
import Navegacao from "./components/Navegacao";
import Principal from "./components/Principal";
import Login from './pages/Login.page';
import Home from './pages/Home.page';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase';


export const app = initializeApp(firebaseConfig);
function App() {
  return (
    // <>
    //   <header className="topo">
    //     <Logo />
    //     <Navegacao />
    //   </header>
    //   <Principal />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App;
