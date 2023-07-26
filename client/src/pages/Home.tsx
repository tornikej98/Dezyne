import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headTextAnimation, slideAnimation } from '../config/motion';

import state from '../store';
import { dezyne } from '../assets';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('up')}>
            <img src={dezyne} alt='logo' className='w-24 h-24 object-contain' />
          </motion.header>
          <motion.div className='home-content' {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className=' xl:block hidden' /> Dezyne
            </h1>
          </motion.div>
          <motion.div className='flex flex-col gap-5' {...headTextAnimation}>
            <p className=' max-w-md font-normal text-gray-600 text-xl'>
              Design your style.
              <strong> Express your creativity. </strong>
            </p>
            <div className='w-fit  py=2.5 font-bold text-sm'>
              <button
                onClick={() => (state.intro = false)}
                className='px-2 py-1.5 flex-1 h-16 w-48 text-[#000] bg-[#0BF3EE] rounded-md text-xl'
              >
                Customize
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
