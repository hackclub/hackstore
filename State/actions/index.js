import { activetab } from "./actiontype";

export const activetabchanged = (activeTab) => ({
  type: activetab,
  activetab: activeTab,
});
