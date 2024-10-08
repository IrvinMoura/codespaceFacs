import Profile from "../components/profile.component";
import './App.css';

const HomePage = () => {
    return (
        <div>
            <Profile name="Katherine Jhonson" imgUrl="https://i.imgur.com/MK3eW3Am.jpg" />
            <Profile name="Dorothy Vaughan" imgUrl="" />
            <Profile name="Mary Jackson" imgUrl="" />
        </div>
    )
}

export default HomePage;
