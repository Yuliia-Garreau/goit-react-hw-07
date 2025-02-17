import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../initialContacts.json";
console.log(initialContacts);
const initialState = {
  contacts: {
    items: initialContacts,
  },
};
console.log(initialState.contacts.items);

const slice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact(state, actions) {
      state.items.push(actions.payload);
    },
    deleteContact(state, actions) {
      state.items = state.items.filter(
        (contact) => contact.id !== actions.payload
      );
    },
    // changeFilter(state, actions) {
    //   state.filters.name = actions.payload;
    // },
  },
});
export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
console.log(selectContacts);
