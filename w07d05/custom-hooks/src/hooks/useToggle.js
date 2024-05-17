import {useState} from 'react';

const useToggle = (defaultValue) => {
  const [isOn, setIsOn] = useState(defaultValue);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return {
    isOn,
    toggle
  };
};

export default useToggle;
