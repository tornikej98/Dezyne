import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shaddows = useRef(null);
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shaddows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={10}
        intensity={0.7}
        ambient={0.75}
        position={[5, 5, 10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
