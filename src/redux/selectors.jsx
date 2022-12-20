import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector([selectFilter, selectContacts], (filter, items) => {
  const normalizedFilter = filter.toLowerCase();
  const contacts = items;

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
});

// export const selectVisibleContacts = state => {
//   const normalizedFilter = selectFilter(state).toLowerCase();
//   const contacts = selectContacts(state)

//     return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter));
// };