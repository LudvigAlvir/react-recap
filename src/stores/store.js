import { create } from "zustand";

export const useNotes = create((set) => ({
  notes: ["one", "two"],
  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),
  removeNote: (note) =>
    set((state) => ({
      notes: state.notes.filter((value) => note !== value),
    })),
  removeAll: () => set({ notes: [] }),
  reset: () =>
    set({
      notes: ["one", "two"],
    }),
  addRandomNumber: () =>
    set((state) => ({
      notes: [...state.notes, parseInt(Math.random() * 100)],
    })),
}));
console.log(parseInt(Math.random() * 100));
