import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import ShirtModel from './ShirtModel';
import Backdrop from './Backdrop';
import Camera from './Camera';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      {/* <Camera> */}
      {/* <Backdrop /> */}
      <Center>
        <ShirtModel />
      </Center>
      {/* </Camera> */}
    </Canvas>
  );
};

export default CanvasModel;
