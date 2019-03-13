import { SELECTED_PERSON } from "./actionType";

export const selectPerson = person => ({
  type: SELECTED_PERSON,
  payload: {
    person
  }
});
