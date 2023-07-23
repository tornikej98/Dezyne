import React from 'react';

interface TabPicker {
  key: string;
  tab: {
    name: string;
    icon: string;
  };
  isFilterTab?: boolean;
  isActiveTab?: string;
  handleClick: () => void;
}

const TabPicker: React.FC<TabPicker> = () => {
  return <div>Tab</div>;
};

export default TabPicker;
