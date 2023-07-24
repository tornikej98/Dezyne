import React from 'react';
import { getContrastingColor } from '../config/helpers';
import state from '../store';
import { useSnapshot } from 'valtio';

interface FilePicker {
  file: File;
  setFile: (file: File) => void;
  readFile: (type: string) => void;
}

const FilePicker: React.FC<FilePicker> = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e) => setFile(e.target.files![0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload Image
        </label>
        <p className='mt-2 text-gray-800 text-sm truncate'>
          {' '}
          {file === undefined ? 'Please select an image' : file.name}
        </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <button
          onClick={() => readFile('logo')}
          style={{
            borderWidth: 1,
            borderColor: snap.color,
          }}
          className='px-2 py-1.5 flex-1 rounded-md'
        >
          Logo
        </button>
        <button
          onClick={() => readFile('full')}
          style={{
            backgroundColor: snap.color,
            color: getContrastingColor(snap.color),
          }}
          className='px-2 py-1.5 flex-1 rounded-md'
        >
          Full
        </button>
      </div>
    </div>
  );
};

export default FilePicker;
