import Lottie from 'lottie-react'
import anim from '../../../public/animation.json'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <Lottie  animationData={anim}></Lottie>
        </div>
    );
};

export default Loader;