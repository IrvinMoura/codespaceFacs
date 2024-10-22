import './App.css';
import Logo from "./components/Logo"
import Navegacao from "./components/Navegacao";
import Principal from "./components/Principal";


const App = () => {
  return (
    <>
      <header className="topo">
        <Logo />
        <Navegacao />
      </header>
      <Principal />
    </>
  )
}

export default App;
