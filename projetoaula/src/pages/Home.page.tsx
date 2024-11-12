import Logo from "../components/Logo";
import Navegacao from "../components/Navegacao";
import Principal from "../components/Principal";

const Home = () => {
    return (
        <div>
            <header>
                <Logo />
                <Navegacao />
            </header>
            <Principal />
        </div>
    );
};

export default Home;