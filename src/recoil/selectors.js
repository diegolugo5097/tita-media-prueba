import { stateAuth, stateProfile, stateIsOpenModal, stateTag } from "./atoms";
import { selector } from "recoil";

export const selectProfile = selector({
  key: "selectProfile",
  get: ({ get }) => {
    let profile = get(stateProfile);
    return profile;
  },
});

export const selectIsOpenModal = selector({
  key: "selectIsOpenModal",
  get: ({ get }) => {
    let modal = get(stateIsOpenModal);
    return modal;
  },
});

export const selectIsTag = selector({
  key: "selectIsTag",
  get: ({ get }) => {
    let tag = get(stateTag);
    return tag;
  },
});

export const selectAuth = selector({
  key: "selectAuth",
  get: ({ get }) => {
    let auth = get(stateAuth);
    return auth;
  },
});
