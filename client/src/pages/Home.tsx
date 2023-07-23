import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

import state from '../store';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className=' xl:block hidden' /> Dezyne
            </h1>
          </motion.div>
          <motion.div className='flex flex-col gap-5' {...headTextAnimation}>
            <p className=' max-w-md font-normal text-gray-600 text-base'>
              Design a unique t-shirt.
              <strong> Express your creativity. </strong>
              Build your style
            </p>
            <div className='w-fit px-4 py=2.5 font-bold text-sm'>
              <button
                onClick={() => (state.intro = false)}
                className='px-2 py-1.5 flex-1 text-[#fff] bg-[#EFBD48] rounded-md'
              >
                Customize It
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
