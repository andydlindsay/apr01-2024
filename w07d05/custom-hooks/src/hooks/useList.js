import {useState} from 'react';

const useList = () => {
  const [list, setList] = useState([]);

  const addElement = (element) => {
    const copy = [...list, element];
    setList(copy);
  };

  const removeElement = (element) => {
    const copy = list.filter((el) => { return element !== el; });
    setList(copy);
  };

  const emptyList = () => {
    setList([]);
  };

  return {
    list,
    addElement,
    removeElement,
    emptyList,
  };
};

export default useList;
