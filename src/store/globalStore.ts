import { create } from 'zustand';

type GlobalState = {
  name: string;
  email: string;
  phoneNumber: string;
  salary: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setSalary: (value: string) => void;
};

const useGlobalStore = create<GlobalState>((set) => ({
  name: '',
  email: '',
  phoneNumber: '',
  salary: '',
  setName: (value: string) => set({ name: value }),
  setEmail: (value: string) => set({ email: value }),
  setPhoneNumber: (value: string) => set({ phoneNumber: value }),
  setSalary: (value: string) => set({ salary: value }),
}));

export default useGlobalStore;
