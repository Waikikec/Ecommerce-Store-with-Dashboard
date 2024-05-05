import { create } from 'zustand';

interface StoreProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useStore = create<StoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useStore;