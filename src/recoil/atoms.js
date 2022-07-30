import { atom } from "recoil";

const auth = localStorage.getItem("auth") ? true : false;

export const stateAuth = atom({
  key: "isAuth",
  default: auth || false,
});

export const stateIsOpenModal = atom({
  key: "isOpen",
  default: false,
});

export const stateTag = atom({
  key: "isTag",
  default: false,
});

export const stateProfile = atom({
  key: "profile",
  default: {},
});
