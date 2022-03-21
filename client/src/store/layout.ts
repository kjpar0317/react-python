import { atom } from "jotai";

const themeStore = atom("light");
const sidebarStore = atom(false);

export { themeStore, sidebarStore };
