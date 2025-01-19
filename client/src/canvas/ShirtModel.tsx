import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
import { Texture } from 'three';

interface ShirtGLTF {
  nodes: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T_Shirt_male: any;
  };
  materials: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lambert1: any;
  };
}

interface SnapState {
  color: string;
  logoDecal: string;
  fullDecal: string;
  isFullTexture: boolean;
  isLogoTexture: boolean;
  intro: boolean;
}

const ShirtModel = () => {
  const snap = useSnapshot<SnapState>(state);

  const { nodes, materials } = useGLTF(
    './shirt_baked.glb'
  ) as unknown as ShirtGLTF;

  const logoTexture = useTexture(snap.logoDecal) as Texture;
  const fullTexture = useTexture(snap.fullDecal) as Texture;

  useFrame((_, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
          />
        )}
      </mesh>
    </group>
  );
};

export default ShirtModel;
