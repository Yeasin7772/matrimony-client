// import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Benefits from "../components/Benefits/Benefits";
import SuccessStory from "../components/home/SuccessStory/SuccessStory";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PremiumMember from "./PremiumMember/PremiumMember";


const Home = () => {
    // const [data] = useLoaderData()
    // console.log(data);
    return (
        <div>
            {/* <NavBar/> */}
            <Header />
            <PremiumMember />
            <SuccessStory/>
            <Benefits />
            <Footer />
        </div>
    );
};

export default Home;
