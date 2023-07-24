import React, { useState } from 'react';
import { AnimatePresence, animatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, FilePicker, TabPicker } from '../components';
import { fade } from 'maath/dist/declarations/src/misc';

const CustomizerPage = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');
  const [AIPromt, setAIPromt] = useState('');
  const [generateImage, setGenerateImage] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const showTabContent = () => {
    if (activeEditorTab === 'colorpicker') {
      return <ColorPicker />;
    } else if (activeEditorTab === 'filepicker') {
      return <FilePicker />;
    } else if (activeEditorTab === 'aipicker') {
      return <AIPicker />;
    } else return null;
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key='custon'
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <TabPicker
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {showTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <button
              onClick={() => (state.intro = true)}
              className='w-fit px-4 py-2.5 text-[#fff] bg-[#EFBD48] rounded-md'
            >
              Go Back
            </button>
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <TabPicker
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=''
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomizerPage;
