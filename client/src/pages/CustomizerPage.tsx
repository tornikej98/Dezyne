import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import { reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, FilePicker, TabPicker } from '../components';

const CustomizerPage = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState<File | undefined>(undefined);
  const [AIPromt, setAIPromt] = useState('');
  const [generateImage, setGenerateImage] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState<{
    logoShirt: boolean;
    stylishShirt: boolean;
    [key: string]: boolean | string;
  }>({
    logoShirt: true,
    stylishShirt: false,
  });

  const showTabContent = () => {
    if (activeEditorTab === 'colorpicker') {
      return <ColorPicker />;
    } else if (activeEditorTab === 'filepicker') {
      return <FilePicker file={file!} setFile={setFile} readFile={readFile} />;
    } else if (activeEditorTab === 'aipicker') {
      return (
        <AIPicker
          AIPromt={AIPromt}
          setAIPromt={setAIPromt}
          generateImage={generateImage}
          handleSubmit={handleSubmit}
        />
      );
    } else return null;
  };

  const handleSubmit = async (type: 'logo' | 'full') => {
    if (!AIPromt) return alert('Please enter promt');
    try {
      setGenerateImage(true);

      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          AIPromt,
        }),
      });
      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error);
    } finally {
      setGenerateImage(false);
      setActiveEditorTab('');
    }
  };

  const handleDecals = (type: string, result: string) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type: string) => {
    reader(file!).then((result) => {
      handleDecals(type, result as string);
      setActiveEditorTab('');
    });
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
                    handleClick={() => {
                      if (activeEditorTab === '') {
                        setActiveEditorTab(tab.name);
                      } else {
                        setActiveEditorTab('');
                      }
                    }}
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
              className='w-fit px-4 py-2.5 text-[#fff] bg-[#FE0150] rounded-md'
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
                isActiveTab={activeFilterTab[tab.name] as boolean}
                handleClick={() => {
                  handleActiveFilterTab(tab.name);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomizerPage;
