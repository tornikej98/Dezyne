import React, { Ref, RefObject, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';
import { Euler, Group } from 'three';

const Camera = ({ children }) => {
  const group = useRef<Group | null>(null);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const breakpoint = window.innerWidth <= 1260;
    const mobile = window.innerWidth <= 600;

    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (breakpoint) targetPosition = [0, 0, 2];
      if (mobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (mobile) targetPosition = [0, 0.2, 2.5];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(
      state.camera.position,
      targetPosition as [x: number, y: number, z: number],
      0.25,
      delta
    );

    easing.dampE(
      group.current!.rotation as Euler,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default Camera;
