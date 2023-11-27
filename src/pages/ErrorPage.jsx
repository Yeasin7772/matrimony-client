import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-full lg:h-[50vh] w-[600px] mx-auto justify-center mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/MPCB2Pj/404.gif)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-black">
                <div className=" px-12">
                    <h1 className="mb-5 text-5xl font-bold ">404</h1>
                    <p className="mb-5 text-2xl">Well Be Back...
                        the page doesn't exits</p>
                    <div className="flex justify-center gap-6 text-white">
                        <Link to='/'> <button className="btn btn-primary">Back</button></Link>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;
