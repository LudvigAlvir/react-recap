const noteStore = {
  notes: ["one", "two"],
  ids: [1, 2, 3, 4],
};
const newStore = { ...noteStore, ...{ notes: "one" } };
console.log(newStore);
