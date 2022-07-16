import { ResponseIssue } from './../../types/issue';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IssueType } from '../../types/issue';

export const fetchIssues = createAsyncThunk(
  'issue/fetchIssues',
  async ({
    owner,
    name,
    page,
  }: {
    owner: string | undefined;
    name: string | undefined;
    page: number;
  }) => {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${name}/issues?&page=${page}`
    );
    return response.data;
  }
);

const issueSlice = createSlice({
  name: 'issue',
  initialState: {
    isLoading: false,
    issues: [] as IssueType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchIssues.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const data = payload.map((item: ResponseIssue) => {
        return {
          id: item.id,
          updatedAt: item.updated_at,
          title: item.title,
          issuePageURL: item.html_url,
          author: item.user.login,
          avatarImgSrc: item.user.avatar_url,
        };
      });
      state.issues = data;
    });
  },
});

export default issueSlice.reducer;
