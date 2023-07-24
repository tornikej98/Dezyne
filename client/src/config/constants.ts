import { swatch, fileIcon, ai, logoShirt, stylishShirt } from '../assets';

interface EditorTabs {
  name: string;
  icon: string;
}

interface FilterTabs {
  name: string;
  icon: string;
}

interface DecalTypes {
  [key: string]: {
    stateProperty: string;
    filterTab: string;
  };
}

export const EditorTabs: EditorTabs[] = [
  {
    name: 'colorpicker',
    icon: swatch,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  {
    name: 'aipicker',
    icon: ai,
  },
];

export const FilterTabs: FilterTabs[] = [
  {
    name: 'logoShirt',
    icon: logoShirt,
  },
  {
    name: 'stylishShirt',
    icon: stylishShirt,
  },
];

export const DecalTypes: DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
};
