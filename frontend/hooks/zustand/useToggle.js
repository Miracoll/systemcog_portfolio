import { create } from "zustand";

const useToggle = create((set) => ({
    isSearchBarOpen: false,
    isSidebarOpen: false,
    setSearchBarOpen: (isSearchBarOpen) => set(() => ({ isSearchBarOpen })),
    setSidebarOpen: (isSidebarOpen) => set(() => ({ isSidebarOpen })),
}));

export default useToggle;
