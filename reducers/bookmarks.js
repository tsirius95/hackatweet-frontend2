import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const bookmarksSlice = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		addBookmark: (state, action) => {
			state.value.push(action.payload);
		},
		removeBookmark: (state, action) => {
			state.value = state.value.filter(bookmark => bookmark.user !== action.payload.user);
		},
		removeAllBookmark: (state) => {
			state.value = [];
		},
	},
});

export const { addBookmark, removeBookmark, removeAllBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;