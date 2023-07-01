import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from 'redux/auth/authOperations';
import {
  addContact,
  editContact,
  fetchContacts,
  removeContact,
} from './contactsOperations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logoutUser.fulfilled, _ => {
        return { ...initialState };
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: [...state.items, payload],
        };
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.map(contact =>
            contact.id !== payload.id ? contact : payload
          ),
        };
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.filter(contact => contact.id !== payload.id),
        };
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
