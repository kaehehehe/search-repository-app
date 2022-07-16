import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../features/search/searchSlice';
import issueSlice from '../features/issue/issueSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    issue: issueSlice,
  },
});
