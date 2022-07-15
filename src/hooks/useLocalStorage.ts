import { useState } from 'react';

import { RepoType } from '../types/common';

export const useLocalStorage = (key: string, initialValue: RepoType[]) => {
  const getLocalStorage = () => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : initialValue;
  };

  const [storageItems, setStorageItems] = useState(() => getLocalStorage());

  const setLocalStorage = (value: RepoType[]) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStorageItems(value);
  };

  return [storageItems, setLocalStorage];
};
