import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  sidebarToggle: () => void;
}

export const useSidebarStore = create<SidebarState>()(set => ({
  isOpen: false,
  sidebarToggle: () => set(state => ({ isOpen: !state.isOpen })),
}));
