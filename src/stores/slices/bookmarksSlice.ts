import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarksState {
  ids: string[];
}

const initialState: BookmarksState = {
  ids: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('bookmarks') || '[]')
    : [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<string>) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload);
        localStorage.setItem('bookmarks', JSON.stringify(state.ids));
      }
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.ids = state.ids.filter(id => id !== action.payload);
      localStorage.setItem('bookmarks', JSON.stringify(state.ids));
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
