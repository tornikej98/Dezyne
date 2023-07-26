import { proxy } from 'valtio';
import { dezyne, tigerStripes } from '../assets';

interface State {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
  [key: string]: boolean | string;
}

const state: State = proxy({
  intro: true,
  color: '#9e9e9e',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: dezyne,
  fullDecal: tigerStripes,
});

export default state;
