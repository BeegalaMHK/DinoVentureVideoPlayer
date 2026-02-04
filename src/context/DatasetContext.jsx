import React, { createContext, useContext } from 'react';
import { dataset as defaultDataset } from '../constant/dataset';

const DatasetContext = createContext(defaultDataset);

export const useDataset = () => useContext(DatasetContext);

export function DatasetProvider({ children, value }) {
  return (
    <DatasetContext.Provider value={value ?? defaultDataset}>
      {children}
    </DatasetContext.Provider>
  );
}

export default DatasetContext;
