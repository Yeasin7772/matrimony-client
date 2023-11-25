import NavBar from "../Shared/NavBar/NavBar";
import Benefits from "../components/Benefits/Benefits";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PremiumMember from "./PremiumMember/PremiumMember";


const Home = () => {
    return (
        <div>
            {/* <NavBar/> */}
            <Header/>
            <PremiumMember/>
            <Benefits/>
            <Footer/>
        </div>
    );
};

export default Home;
