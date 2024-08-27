type Obj = Record<string, number>;

export const syncBaskets = (obj1: Obj, obj2: Obj | null): Obj => {
  if (!obj2) return obj1
  return Object.entries(obj1).reduce(
    (acc, [id, quantity]) => {
      if (id in acc) {
        acc[id] += quantity;
      } else {
        acc[id] = quantity;
      }
      return acc;
    },
    { ...obj2 }
  );
};