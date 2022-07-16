import { RepoType, ResponseRepo } from './../../types/common';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInitialRepos = createAsyncThunk(
  'search/fetchInitialRepos',
  async ({ keyword }: { keyword: string }) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}&page=1`
    );
    return response.data.items;
  }
);

export const fetchRepos = createAsyncThunk(
  'search/fetchRepos',
  async ({ keyword, page }: { keyword: string; page: number }) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}&page=${page}`
    );
    return response.data.items;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isLoading: false,
    keyword: '' as string,
    page: 1,
    repos: [] as RepoType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInitialRepos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchInitialRepos.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const data = payload.map((item: ResponseRepo) => {
        return {
          id: item.id,
          title: item.full_name,
          issueCnt: item.open_issues,
          description: item.description,
          updatedAt: item.updated_at,
        };
      });
      state.repos = [...state.repos, ...data];
      state.page += 1;
    });
    builder.addCase(fetchRepos.fulfilled, (state, { payload }) => {
      const data = payload.map((item: ResponseRepo) => {
        return {
          id: item.id,
          title: item.full_name,
          issueCnt: item.open_issues,
          description: item.description,
          updatedAt: item.updated_at,
        };
      });
      state.repos = [...state.repos, ...data];
      state.page += 1;
    });
  },
});

export default searchSlice.reducer;
