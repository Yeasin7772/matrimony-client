import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PremiumMember from "./PremiumMember/PremiumMember";


const Home = () => {
    return (
        <div>
            {/* <NavBar/> */}
            <Header/>
            <PremiumMember/>
            <Footer/>
        </div>
    );
};

export default Home;
